/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Viagem from "../../../models/Viagem";
import type Veiculo from "../../../models/Veiculo";
import type Usuario from "../../../models/Usuario";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { calcularRotaViagem } from "../../../utils/routeCalculator";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { PageShell } from "../../about/AboutShared";

const viagemInicial: Viagem = {
	id: 0,
	embarque: "",
	destino: "",
	distancia: 0,
	tempo_vigagem: 0,
	status: "SOLICITADA",
	agendamento: false,
	dataAgendamento: "",
	dataEncerramento: "",
	formaPagamento: "PIX",
	valor: 0,
	veiculo: {
		id: 0,
		foto: "",
		tipo: "",
		modelo: "",
		marca: "",
		cor_veiculo: "",
		placa: "",
		viagens: []
	},
	usuario: {
		id: 0,
		nome: "",
		usuario: "",
		senha: "",
		foto: "",
		viagens: []
	}
};

function FormViagem() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isLoadingDados, setIsLoadingDados] = useState<boolean>(false);
	const [isCalculatingRoute, setIsCalculatingRoute] = useState<boolean>(false);
	const [routeFeedback, setRouteFeedback] = useState<string>("");
	const [viagem, setViagem] = useState<Viagem>(viagemInicial);
	const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
	const [usuarios, setUsuarios] = useState<Usuario[]>([]);

	async function buscarViagemPorId(viagemId: string) {
		await buscar(`/viagens/${viagemId}`, (data: unknown) => {
			const viagemData = Array.isArray(data) ? data[0] : data;
			setViagem((viagemData as Viagem) ?? viagemInicial);
		}, {
			headers: { Authorization: token },
		});
	}

	async function carregarDados() {
		try {
			setIsLoadingDados(true);

			await Promise.all([
				buscar("/veiculos", setVeiculos, {
					headers: { Authorization: token },
				}),
				buscar("/usuarios/all", setUsuarios, {
					headers: { Authorization: token },
				}),
				id ? buscarViagemPorId(id) : Promise.resolve(),
			]);
		} catch (error: any) {
			if (error.toString().includes("401")) {
				handleLogout();
			} else {
				ToastAlerta("Erro ao carregar os dados da viagem.", "erro");
			}
		} finally {
			setIsLoadingDados(false);
		}
	}

	useEffect(() => {
		if (token === "") {
			ToastAlerta("Você precisa estar logado!", "info");
			navigate("/");
			return;
		}

		carregarDados();
	}, [token, id]);

	useEffect(() => {
		const embarque = viagem.embarque.trim();
		const destino = viagem.destino.trim();

		if (!embarque || !destino) {
			setRouteFeedback("");
			return;
		}

		let isCancelled = false;
		const timeoutId = window.setTimeout(async () => {
			try {
				setIsCalculatingRoute(true);
				const rota = await calcularRotaViagem(embarque, destino);

				if (isCancelled) {
					return;
				}

				setViagem((current) => ({
					...current,
					distancia: Number(rota.distanceKm.toFixed(1)),
					tempo_vigagem: Math.max(1, Math.round(rota.durationMinutes)),
				}));
				setRouteFeedback(
					rota.method === "osrm"
						? "Distância e tempo calculados pela rota real (OSRM)."
						: "Rota indisponível. Distância e tempo estimados por linha reta (Haversine)."
				);
			} catch {
				if (!isCancelled) {
					setRouteFeedback("Digite um embarque e destino válidos para calcular automaticamente.");
					ToastAlerta("Não foi possível calcular a rota automaticamente.", "erro");
				}
			} finally {
				if (!isCancelled) {
					setIsCalculatingRoute(false);
				}
			}
		}, 700);

		return () => {
			isCancelled = true;
			window.clearTimeout(timeoutId);
		};
	}, [viagem.embarque, viagem.destino]);

	useEffect(() => {
		const valorCalculado = Number((viagem.distancia * 1 + viagem.tempo_vigagem * 0.2).toFixed(2));

		if (Number.isNaN(valorCalculado)) {
			return;
		}

		setViagem((current) => (
			current.valor === valorCalculado
				? current
				: { ...current, valor: valorCalculado }
		));
	}, [viagem.distancia, viagem.tempo_vigagem]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		const { name, value } = e.target;

		setViagem((current) => ({
			...current,
			[name]: name === "agendamento"
				? value === "true"
				: ["distancia", "tempo_vigagem"].includes(name)
					? Number(value)
					: value,
		}));
	}

	function atualizarVeiculo(e: ChangeEvent<HTMLSelectElement>) {
		const veiculoSelecionado = veiculos.find((veiculo) => veiculo.id === Number(e.target.value));

		if (veiculoSelecionado) {
			setViagem((current) => ({
				...current,
				veiculo: veiculoSelecionado,
			}));
		}
	}

	function atualizarUsuario(e: ChangeEvent<HTMLSelectElement>) {
		const usuarioSelecionado = usuarios.find((item) => item.id === Number(e.target.value));

		if (usuarioSelecionado) {
			setViagem((current) => ({
				...current,
				usuario: usuarioSelecionado,
			}));
		}
	}

	function retornar() {
		navigate("/listarviagens");
		ToastAlerta("Retornando para Viagens", "info");
	}

	async function gerarNovaViagem(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		try {
			if (id !== undefined) {
				await atualizar(`/atualizarviagens/${id}`, viagem, setViagem, {
					headers: { Authorization: token },
				});
				ToastAlerta("A viagem foi atualizada com sucesso!", "sucesso");
			} else {
				await cadastrar("/cadastrarviagens", viagem, setViagem, {
					headers: { Authorization: token },
				});
				ToastAlerta("A viagem foi cadastrada com sucesso!", "sucesso");
			}

			retornar();
		} catch (error: any) {
			if (error.toString().includes("401")) {
				handleLogout();
			} else {
				ToastAlerta(
					id !== undefined ? "Erro ao atualizar a viagem." : "Erro ao cadastrar a viagem.",
					"erro"
				);
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<PageShell>
			<div className="min-h-screen flex items-center justify-center bg-(--color-background) px-4 pt-30 pb-20">
				<div className="w-full max-w-4xl">
					<h1 className="text-center text-4xl text-[var(--color-primary)] mb-8">
						{id !== undefined ? "Editar Viagem" : "Cadastrar Viagem"}
					</h1>

					<form
						className="flex flex-col gap-6 bg-(--color-background-card) border border-(--color-stroke) rounded-2xl p-6 shadow-(--shadow-soft)"
						onSubmit={gerarNovaViagem}
					>
						{isLoadingDados && (
							<div className="flex justify-center py-4 text-(--color-foreground-muted)">
								<ClipLoader color="#84CC16" size={24} />
							</div>
						)}

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex flex-col gap-2 md:col-span-2">
								<label className="text-(--color-foreground-muted) px-2">Embarque</label>
								<input
									type="text"
									name="embarque"
									placeholder="Cidade ou ponto de partida"
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
									value={viagem.embarque}
									onChange={atualizarEstado}
								/>
							</div>

							<div className="flex flex-col gap-2 md:col-span-2">
								<label className="text-(--color-foreground-muted) px-2">Destino</label>
								<input
									type="text"
									name="destino"
									placeholder="Cidade ou ponto de chegada"
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
									value={viagem.destino}
									onChange={atualizarEstado}
								/>
								<p className="px-2 text-xs text-(--color-foreground-low)">
									{isCalculatingRoute ? "Calculando rota..." : routeFeedback}
								</p>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Distância (km)</label>
								<input
									type="number"
									name="distancia"
									min="0"
									step="0.1"
									readOnly
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30 opacity-90"
									value={viagem.distancia}
									onChange={atualizarEstado}
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Tempo de viagem (min)</label>
								<input
									type="number"
									name="tempo_vigagem"
									min="0"
									readOnly
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30 opacity-90"
									value={viagem.tempo_vigagem}
									onChange={atualizarEstado}
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Valor R$</label>
								<input
									type="number"
									name="valor"
									min="0"
									step="0.01"
									readOnly
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30 opacity-90"
									value={ viagem.valor}
								/>
								<p className="px-2 text-xs text-(--color-foreground-low)">
									Valor calculado automaticamente: distancia x 1 + tempo x 0.2
								</p>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Status</label>
								<select
									name="status"
									value={viagem.status}
									onChange={atualizarEstado}
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white"
								>
									<option value="SOLICITADA">Solicitada</option>
									<option value="ACEITA">Aceita</option>
									<option value="EM_ANDAMENTO">Em andamento</option>
									<option value="CONCLUIDA">Concluída</option>
									<option value="CANCELADA">Cancelada</option>
								</select>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Agendamento</label>
								<select
									name="agendamento"
									value={String(viagem.agendamento)}
									onChange={atualizarEstado}
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white"
								>
									<option value="false">Não</option>
									<option value="true">Sim</option>
								</select>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Data do agendamento</label>
								<input
									type="date"
									name="dataAgendamento"
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
									value={viagem.dataAgendamento ?? ""}
									onChange={atualizarEstado}
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Data de encerramento</label>
								<input
									type="date"
									name="dataEncerramento"
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
									value={viagem.dataEncerramento ?? ""}
									onChange={atualizarEstado}
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Forma de pagamento</label>
								<select
									name="formaPagamento"
									value={viagem.formaPagamento}
									onChange={atualizarEstado}
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white"
								>
									<option value="PIX">PIX</option>
									<option value="CARTAO">Cartão</option>
									<option value="DINHEIRO">Dinheiro</option>
									<option value="TRANSFERENCIA">Transferência</option>
								</select>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Veículo</label>
								<select
									name="veiculo"
									value={viagem.veiculo.id}
									onChange={atualizarVeiculo}
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white"
								>
									<option value={0}>Selecione um veículo</option>
									{veiculos.map((veiculo) => (
										<option key={veiculo.id} value={veiculo.id}>
											{veiculo.marca} {veiculo.modelo} - {veiculo.placa}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-(--color-foreground-muted) px-2">Usuário</label>
								<select
									name="usuario"
									value={viagem.usuario.id}
									onChange={atualizarUsuario}
									className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white"
								>
									<option value={0}>Selecione um usuário</option>
									{usuarios.map((item) => (
										<option key={item.id} value={item.id}>
											{item.nome}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="flex mt-4 gap-6">
							<button
								type="submit"
								disabled={isLoading || isLoadingDados}
								className="w-1/2 py-3 rounded-lg font-bold bg-(--color-primary) hover:bg-(--color-primary-light) shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)] transition disabled:opacity-70"
							>
								{isLoading ? <ClipLoader color="#000" size={24} /> : <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>}
							</button>

							<button
								type="button"
								onClick={retornar}
								className="w-1/2 py-3 rounded-lg font-bold bg-(--color-background-subtle) text-white hover:border-red-600 hover:border transition"
							>
								Cancelar
							</button>
						</div>
					</form>
				</div>
			</div>
		</PageShell>
	);
}

export default FormViagem;
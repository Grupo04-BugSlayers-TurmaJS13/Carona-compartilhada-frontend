/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Veiculo from "../../../models/Veiculo";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { PageShell } from "../../about/AboutShared";

function FormVeiculo() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [veiculo, setVeiculo] = useState<Veiculo>({
		id: 0,
		foto: "",
		tipo: "",
		modelo: "",
		marca: "",
		cor_veiculo: "",
		placa: "",
		viagens: []
	});

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	const { id } = useParams<{ id: string }>();

	async function buscarVeiculoPorId(id: string) {
		try {
			await buscar(`veiculos/${id}`, setVeiculo, {
				headers: { Authorization: token },
			});
		} catch (error: any) {
			if (error.toString().includes("401")) {
				handleLogout();
			}
		}
	}

	useEffect(() => {
		if (token === "") {
			ToastAlerta("Você precisa estar logado!", "info");
			navigate("/")
		}
	}, [token])

	useEffect(() => {
		if (id !== undefined) {
			buscarVeiculoPorId(id);
		}
	}, [id])

	function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
		setVeiculo({
			...veiculo,
			[e.target.name]: e.target.value,
		});
	}

	function retornar() {
		navigate("/listarveiculos");
		ToastAlerta("Retornando para Veículos", "info");
	}

	async function gerarNovoVeiculo(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		if (id !== undefined) {
			try {
				await atualizar("/veiculos/atualizar", veiculo, setVeiculo, {
					headers: { Authorization: token },
				});
				ToastAlerta("O veículo foi atualizado com sucesso!", "sucesso");
				retornar();
			} catch (error: any) {
				if (error.toString().includes("401")) {
					handleLogout();
				} else {
					ToastAlerta("Erro ao atualizar o veículo.", "erro");
				}
			}
		} else {
			try {
				await cadastrar("/veiculos/cadastrar", veiculo, setVeiculo, {
					headers: { Authorization: token },
				});
				ToastAlerta("O veículo foi cadastrado com sucesso!", "sucesso");
				retornar();
			} catch (error: any) {
				if (error.toString().includes("401")) {
					handleLogout();
				} else {
					ToastAlerta("Erro ao cadastrar o veículo.", "erro");
				}
			}
		}

		setIsLoading(false);
	}

	return (
		<PageShell>
			<div className="min-h-screen flex items-center justify-center bg-(--color-background) px-4 pt-30 pb-20">

				<div className="w-full max-w-2xl">
					<h1 className="text-center text-4xl text-[var(--color-primary)] mb-8">
						{id !== undefined ? "Editar Veículo" : "Cadastrar Veículo"}
					</h1>

					<form className="flex flex-col gap-4 bg-[var(--color-background-card)] border border-[var(--color-stroke)] 
                        rounded-2xl p-6 shadow-[var(--shadow-soft)]"
						onSubmit={gerarNovoVeiculo}>

						{veiculo.foto && veiculo.foto.trim().length > 0 && (
							<div className="flex justify-center mb-4">
								<div className="w-45 h-35 rounded-lg border-2 border-[var(--color-primary-dark)] shadow-[var(--color-primary)] overflow-hidden">
									<img
										src={veiculo.foto}
										alt="preview"
										className="w-full h-full object-cover"
										onError={(e) => (e.currentTarget.style.display = "none")}
									/>
								</div>
							</div>
						)}

						<div className="flex flex-col gap-2">
							<label className="text-[var(--color-foreground-muted)] px-2">Foto (URL)</label>
							<input
								type="text"
								name="foto"
								placeholder="Https://..."
								className="p-3 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] text-white focus:ring-2 focus:ring-[var(--color-primary)]/30"
								value={veiculo.foto}
								onChange={atualizarEstado} />
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-[var(--color-foreground-muted)] px-2">Tipo</label>
							<select
								name="tipo"
								value={veiculo.tipo}
								onChange={atualizarEstado}
								className="p-3 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] text-white"
							>
								<option value="">Selecione</option>
								<option value="CARRO">Carro</option>
								<option value="MOTO">Moto</option>
							</select>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-[var(--color-foreground-muted)] px-2">Marca</label>
							<input
								type="text"
								name="marca"
								className="p-3 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] text-white"
								value={veiculo.marca}
								onChange={atualizarEstado}
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-[var(--color-foreground-muted)] px-2">Modelo</label>
							<input
								type="text"
								name="modelo"
								className="p-3 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] text-white"
								value={veiculo.modelo}
								onChange={atualizarEstado}
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-[var(--color-foreground-muted)] px-2">Cor</label>
							<input
								type="text"
								name="cor_veiculo"
								className="p-3 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] text-white"
								value={veiculo.cor_veiculo}
								onChange={atualizarEstado}
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-[var(--color-foreground-muted)] px-2">Placa</label>
							<input
								type="text"
								name="placa"
								className="p-3 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] text-white"
								value={veiculo.placa}
								onChange={atualizarEstado}
							/>
						</div>

						<div className="flex mt-6 gap-6">
							<button
								type="submit"
								disabled={isLoading}
								className="w-1/2 py-3 rounded-lg font-bold bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)]
								shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)] transition">
								{isLoading ? (
									<ClipLoader color="#000" size={24} />
								) : (
									<span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
								)}
							</button>

							<button
								type="button"
								onClick={retornar}
								className="w-1/2 py-3 rounded-lg font-bold bg-[var(--color-background-subtle)]
								text-white hover:border-red-600 hover:border transition">
								Cancelar
							</button>
						</div>
					</form>
				</div>
			</div>
		</PageShell>
	);
}

export default FormVeiculo;
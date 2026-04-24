/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Viagem from "../../../models/Viagem";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { PageShell } from "../../about/AboutShared";

function DeletarViagem() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [viagem, setViagem] = useState<Viagem>({} as Viagem);

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	async function buscarPorId(viagemId: string) {
		try {
			await buscar(`/deletarviagens/${viagemId}`, setViagem, {
				headers: {
					Authorization: token,
				},
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
			navigate("/");
		}
	}, [token]);

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	async function deletarViagem() {
		setIsLoading(true);

		try {
			await deletar(`/viagens/${id}`, {
				headers: { Authorization: token },
			});
			ToastAlerta("A viagem foi deletada com sucesso!", "sucesso");
		} catch (error: any) {
			if (error.toString().includes("401")) {
				handleLogout();
			} else {
				ToastAlerta("Erro ao deletar a viagem.", "erro");
			}
		} finally {
			setIsLoading(false);
			retornar();
		}
	}

	function retornar() {
		navigate("/viagens");
	}

	return (
		<PageShell>
			<div className="min-h-screen flex items-center justify-center bg-(--color-background) px-4">
				<div className="w-full max-w-md bg-(--color-background-card) border border-(--color-stroke) rounded-2xl p-6 shadow-(--shadow-soft) text-center">
					<h1 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
						Deletar Viagem
					</h1>

					<p className="text-(--color-foreground-muted) mb-6">
						Tem certeza que deseja deletar a viagem:
					</p>

					<h2 className="rf-lg font-semibold text-white mb-2">
						{viagem.embarque} - {viagem.destino}
					</h2>

					<p className="text-sm text-(--color-foreground-muted) mb-6">
						Valor: R$ {viagem.valor?.toFixed ? viagem.valor.toFixed(2) : viagem.valor}
					</p>

					<div className="flex gap-8 items-center justify-center ">
                        <div className=" w-30 flex justify-center items-center border border-(--color-primary) rounded-full">
						<button
							onClick={retornar}
							className="w-1/2 py-3 rounded-lg font-bold bg-(--color-background-subtle) text-white hover:bg-gray-600 transition"
						>
							
                            Cancelar
						</button>
                        </div>

                        <div className=" w-30 flex justify-center items-center border border-red-600 rounded-full">
						<button
							onClick={deletarViagem}
							disabled={isLoading}
							className="w-1/2 py-3 rounded-lg font-bold bg-(--color-error) text-white hover:bg-red-600 transition"
						>
							{isLoading ? "Deletando..." : "Deletar"}
						</button>
                        </div>
					</div>
				</div>
			</div>
		</PageShell>
	);
}

export default DeletarViagem;
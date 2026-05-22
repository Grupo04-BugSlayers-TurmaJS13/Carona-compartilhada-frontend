/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Veiculo from "../../../models/Veiculo";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { PageShell } from "../../about/AboutShared";

const veiculoInicial: Veiculo = {
    id: 0,
    foto: "",
    tipo: "",
    modelo: "",
    marca: "",
    cor_veiculo: "",
    placa: "",
    viagens: []
};

function FormVeiculo() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [veiculo, setVeiculo] = useState<Veiculo>(veiculoInicial);

    async function buscarVeiculoPorId(veiculoId: string) {
        await buscar(`/veiculos/${veiculoId}`, (data: unknown) => {
            setVeiculo((data as Veiculo) ?? veiculoInicial);
        }, { headers: { Authorization: token } });
    }

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate("/login");
            return;
        }
        if (id) buscarVeiculoPorId(id);
    }, [token, id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setVeiculo((current) => ({ ...current, [name]: value }));
    }

    function retornar() {
        navigate("/listarveiculos");
        ToastAlerta("Retornando para Veículos", "info");
    }

    async function gerarNovoVeiculo(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar("/veiculos/atualizar", { ...veiculo, id: Number(id) }, setVeiculo, {
                    headers: { Authorization: token },
                });
                ToastAlerta("O veículo foi atualizado com sucesso!", "sucesso");
            } else {
                await cadastrar("/veiculos/cadastrar", veiculo, setVeiculo, {
                    headers: { Authorization: token },
                });
                ToastAlerta("O veículo foi cadastrado com sucesso!", "sucesso");
            }
            retornar();
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            } else {
                ToastAlerta(
                    id !== undefined ? "Erro ao atualizar o veículo." : "Erro ao cadastrar o veículo.",
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
                <div className="w-full max-w-2xl">
                    <h1 className="text-center text-4xl text-[var(--color-primary)] mb-8">
                        {id !== undefined ? "Editar Veículo" : "Cadastrar Veículo"}
                    </h1>

                    <form
                        className="flex flex-col gap-6 bg-(--color-background-card) border border-(--color-stroke) rounded-2xl p-6 shadow-(--shadow-soft)"
                        onSubmit={gerarNovoVeiculo}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-(--color-foreground-muted) px-2">URL da Foto</label>
                                <input
                                    type="text" name="foto" placeholder="https://..."
                                    className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
                                    value={veiculo.foto} onChange={atualizarEstado}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-(--color-foreground-muted) px-2">Tipo</label>
                                <select
                                    name="tipo" value={veiculo.tipo} onChange={atualizarEstado}
                                    className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white"
                                >
                                    <option value="">Selecione o tipo</option>
                                    <option value="Carro">Carro</option>
                                    <option value="Moto">Moto</option>
                                    <option value="Van">Van</option>
                                    <option value="Ônibus">Ônibus</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-(--color-foreground-muted) px-2">Marca</label>
                                <input
                                    type="text" name="marca" placeholder="Ex: Toyota"
                                    className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
                                    value={veiculo.marca} onChange={atualizarEstado}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-(--color-foreground-muted) px-2">Modelo</label>
                                <input
                                    type="text" name="modelo" placeholder="Ex: Corolla"
                                    className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
                                    value={veiculo.modelo} onChange={atualizarEstado}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-(--color-foreground-muted) px-2">Cor</label>
                                <input
                                    type="text" name="cor_veiculo" placeholder="Ex: Prata"
                                    className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
                                    value={veiculo.cor_veiculo} onChange={atualizarEstado}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-(--color-foreground-muted) px-2">Placa</label>
                                <input
                                    type="text" name="placa" placeholder="Ex: ABC-1234"
                                    className="p-3 rounded-lg bg-(--color-background-subtle) border border-(--color-stroke) text-white focus:ring-2 focus:ring-(--color-primary)/30"
                                    value={veiculo.placa} onChange={atualizarEstado}
                                />
                            </div>

                        </div>

                        <div className="flex mt-4 gap-6">
                            <button
                                type="submit" disabled={isLoading}
                                className="w-1/2 py-3 rounded-lg font-bold bg-(--color-primary) hover:bg-(--color-primary-light) shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)] transition disabled:opacity-70"
                            >
                                {isLoading ? <ClipLoader color="#000" size={24} /> : <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>}
                            </button>

                            <button
                                type="button" onClick={retornar}
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

export default FormVeiculo;
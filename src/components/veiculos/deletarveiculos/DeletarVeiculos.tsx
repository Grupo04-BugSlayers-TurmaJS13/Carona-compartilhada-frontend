/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import type Veiculo from "../../../models/Veiculo"
import { buscar, deletar } from "../../../services/Service"

function DeletarVeiculos() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate("/")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarVeiculo() {
        setIsLoading(true)

        try {
            await deletar(`/veiculos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            ToastAlerta("O veículo foi deletado com sucesso!", "sucesso")
            navigate("/listarveiculos")
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout()
            } else {
                ToastAlerta("Erro ao deletar o veículo.", "erro")
            }
        }
        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate('/listarveiculos')
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">

                <div className="w-full max-w-md bg-[var(--color-background-card)] border border-[var(--color-stroke)]
                    rounded-2xl p-6 shadow-[var(--shadow-soft)] text-center">

                    <h1 className="text-2xl font-bold text-[var(--color-foreground-white)] mb-4">
                        Deletar Veículo
                    </h1>

                    <p className="text-[var(--color-foreground-muted)] mb-6">
                        Tem certeza que deseja deletar o veículo:
                    </p>

                    <h2 className="text-lg font-semibold text-white mb-6">
                        {veiculo.marca} {veiculo.modelo}
                    </h2>

                    <div className="flex gap-4">

                        <button
                            onClick={retornar}
                            className="w-1/2 py-3 rounded-lg font-bold bg-[var(--color-background-subtle)] text-white
                                hover:bg-gray-600 transition">
                            Cancelar
                        </button>

                        <button
                            onClick={deletarVeiculo}
                            disabled={isLoading}
                            className="w-1/2 py-3 rounded-lg font-bold bg-[var(--color-error)] text-white
                                hover:bg-red-600 transition">
                            {isLoading ? "Deletando..." : "Deletar"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeletarVeiculos
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/immutability */
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import type Veiculo from "../../../models/Veiculo"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar } from "../../../services/Service"
import { FaCar, FaPlusCircle } from "react-icons/fa"
import { SyncLoader } from "react-spinners"
import CardVeiculo from "../cardveiculo/CardVeiculo"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { PageShell } from "../../about/AboutShared"

export default function ListarVeiculos() {
    const navigate = useNavigate()

    const [veiculos, setVeiculos] = useState<Veiculo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate("/")
        }
    }, [token])

    useEffect(() => {
        buscarVeiculos()
    }, [veiculos.length])

    async function buscarVeiculos() {
        try {
            setIsLoading(true)

            await buscar("/veiculos", setVeiculos, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <PageShell>
            <section className="min-h-screen min-w-full pt-35 py-10 bg-[var(--color-background)]">

                <div className="flex justify-center px-30">
                    <span className="font-heading text-3xl text-center text-[var(--color-foreground-high)] pb-10">
                        No <span className="text-[var(--color-primary)]">BipBip</span>, você organiza suas{" "}
                        <span className="text-[var(--color-primary)]">caronas</span> e garante uma mobilidade{" "}
                        <span className="text-[var(--color-primary)]">inteligente</span> e <span className="text-[var(--color-primary)]">sustentável</span>.
                    </span>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent my-2" />

                <div className="flex flex-col sm:flex-row justify-between w-[90vw] sm:w-[80vw] lg:w-[75vw] m-auto my-8 items-center gap-4">

                    <h1 className="font-heading text-4xl text-center text-[var(--color-foreground-white)] flex items-center gap-4">
                        <FaCar size={40} className="text-[var(--color-primary)]" /> Veículos
                    </h1>

                    <button
                        onClick={() => navigate("/cadastrarveiculos")}
                        className="bg-[var(--color-primary)] rounded-lg text-black px-6 py-3 font-bold
                                    text-md hover:bg-[var(--color-primary-light)]transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)]">
                        <FaPlusCircle size={20} />Cadastrar
                    </button>
                </div>

                {isLoading && (
                    <div className="flex justify-center w-full py-40">
                        <SyncLoader color="#84CC16" size={20} />
                    </div>
                )}

                <article className="flex py-10 w-screen px-20 justify-center">
                    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">

                        {veiculos.map((veiculo) => (
                            <CardVeiculo
                                key={veiculo.id}
                                veiculo={veiculo}
                            />
                        ))}

                    </div>
                </article>
            </section>
        </PageShell>
    )
}
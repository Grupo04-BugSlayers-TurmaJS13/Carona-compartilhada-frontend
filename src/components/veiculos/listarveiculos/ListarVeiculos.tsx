/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/immutability */
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import type Veiculo from "../../../models/Veiculo"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar } from "../../../service/Service";

function ListarVeiculos() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === "") {
            // ToastAlerta("Você precisa estar logado!", "info")
            navigate("/")
        }
    }, [token]);

    useEffect(() => {
        buscarVeiculos()
    }, [veiculos.length])

    async function buscarVeiculos() {
        try {
            setIsLoading(true)

            await buscar("/veiculos", setVeiculos, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                veiculos.map((veiculo) => (
                    <article key={veiculo.id}>
                        <div className="bg-[var(--color-background-card)] border border-[var(--color-stroke)]
                            rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:scale-[1.02]
                            hover:shadow-[var(--shadow-bip)] transition duration-300">

                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={veiculo.foto || "/default-car.png"}
                                    alt={veiculo.modelo}
                                    className="w-full h-full object-cover"
                                />

                                {/* BADGE */}
                                <span className="absolute top-3 left-3 bg-[var(--color-primary)]
                                    text-black text-xs font-semibold px-3 py-1 rounded-full shadow-[var(--shadow-bip)]">
                                    {veiculo.tipo}
                                </span>
                            </div>

                            {/* CONTEÚDO */}
                            <div className="p-4 flex flex-col gap-2">

                                <h2 className="text-lg font-semibold text-[var(--color-foreground-high)]">
                                    {veiculo.marca} {veiculo.modelo}
                                </h2>

                                <div className="text-sm text-[var(--color-foreground-muted)] space-y-1">
                                    <p>🎨 {veiculo.cor_veiculo}</p>
                                    <p>🔑 {veiculo.placa}</p>
                                </div>

                                <button className="mt-3 bg-[var(--color-primary)] text-black
                                    py-2 rounded-full font-medium shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)]
                                    hover:bg-[var(--color-primary-light)] hover:shadow-[0_0_30px_-5px_rgba(132,204,22,0.6)] transition">
                                    Ver detalhes
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default ListarVeiculos
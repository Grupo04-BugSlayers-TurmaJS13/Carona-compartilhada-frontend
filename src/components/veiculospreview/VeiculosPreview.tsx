/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/set-state-in-effect */
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CardVeiculo from "../veiculos/cardveiculo/CardVeiculo";
import type Veiculo from "../../models/Veiculo";
import { FaArrowCircleRight } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";

interface VeiculosPreviewProps {
    veiculos?: Veiculo[];
}

function VeiculosPreview({ veiculos: veiculosProp = [] }: VeiculosPreviewProps) {
    const [veiculos, setVeiculos] = useState<Veiculo[]>(veiculosProp);
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (veiculosProp.length > 0) {
            setVeiculos(veiculosProp);
        } else if (token) {
            buscarVeiculos();
        }
    }, [token, veiculosProp]);

    async function buscarVeiculos() {
        try {
            await buscar("/veiculos", setVeiculos, {
                headers: { Authorization: token },
            });
        } catch (error) {
            console.error("Erro ao buscar veículos:", error);
        }
    }

    const preview = veiculos.slice(0, 3);

    return (
        <section className="w-full py-8 px-6 md:px-16 bg-[var(--color-background)]">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-6xl mx-auto mb-12">
                <div>
                    <h2 className="rf-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                        Veículos disponíveis
                    </h2>
                    <p className="text-[var(--color-foreground-muted)] mt-2">
                        Confira alguns veículos cadastrados na plataforma
                    </p>
                </div>

                <Link to="/listarveiculos" className="mt-4 md:mt-0 text-[var(--color-primary)] hover:text-[var(--color-primary-light)]
                    font-medium transition items-center gap-2 flex">
                    Ver todos <FaArrowCircleRight size={20} className="text-[var(--color-primary)]" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {preview.length > 0 ? (
                    preview.map((veiculo) => (
                        <CardVeiculo key={veiculo.id} veiculo={veiculo} showActions={false} />
                    ))
                ) : (
                    <p className="text-[var(--color-foreground-muted)] col-span-3 text-center">
                        Nenhum veículo disponível no momento.
                    </p>
                )}

            </div>
        </section>
    );
}

export default VeiculosPreview
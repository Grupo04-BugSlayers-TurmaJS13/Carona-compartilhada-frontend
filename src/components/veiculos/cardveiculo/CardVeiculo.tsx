import { Link } from "react-router-dom";
import type Veiculo from "../../../models/Veiculo";
interface CardProps {
    veiculo: Veiculo
    showActions?: boolean
}

function CardVeiculo({ veiculo, showActions = true }: CardProps) {

    return (
        <div className="bg-[var(--color-background-card)] border border-[var(--color-stroke)] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:scale-[1.02]
            hover:shadow-[var(--shadow-bip)] transition duration-300">

            <div className="relative h-52 overflow-hidden">
                <img
                    src={veiculo.foto || "/default-car.png"}
                    alt={veiculo.modelo}
                    className="w-full h-full object-cover" />

                <span className="absolute top-3 left-3 bg-[var(--color-primary)]
                        text-black text-xs font-semibold px-3 py-1 rounded-full shadow-[var(--shadow-bip)]">
                    {veiculo.tipo}
                </span>
            </div>

            <div className="p-4 flex flex-col gap-2">

                <h2 className="text-lg font-semibold text-[var(--color-primary)]">
                    {veiculo.marca} {veiculo.modelo}
                </h2>

                <div className="text-sm text-[var(--color-foreground-muted)] space-y-1">
                    <p> {veiculo.cor_veiculo}</p>
                    <p> {veiculo.placa}</p>
                </div>

                {showActions && (
                    <div className="flex gap-3">
                        <Link to={`/atualizarveiculo/${veiculo.id}`} className="w-full py-2 flex items-center rounded-full justify-center font-medium text-sm
                                    text-[var(--color-foreground-high)] hover:border hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition">
                            Editar
                        </Link>

                        <Link to={`/deletarveiculo/${veiculo.id}`} className="w-full py-2 flex items-center justify-center font-medium text-sm hover:border rounded-full hover:border-red-600
                                text-white transition">
                            Deletar
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardVeiculo
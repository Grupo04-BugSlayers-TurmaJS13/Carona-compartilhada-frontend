import { Link } from "react-router-dom";
import type Veiculo from "../../../models/Veiculo";
interface CardProps {
    veiculo: Veiculo
    isOpen: boolean
    onToggle: () => void
}

function CardVeiculo({ veiculo, isOpen, onToggle }: CardProps) {

    return (
        <>
            <div className="bg-[var(--color-background-card)]  border border-[var(--color-stroke)] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:scale-[1.02]
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

                    <h2 className="text-lg font-semibold text-[var(--color-foreground-high)]">
                        {veiculo.marca} {veiculo.modelo}
                    </h2>

                    <div className="text-sm text-[var(--color-foreground-muted)] space-y-1">
                        <p> {veiculo.cor_veiculo}</p>
                        <p> {veiculo.placa}</p>
                    </div>

                    <button
                        onClick={onToggle}
                        className="mt-3 bg-[var(--color-primary)] text-black py-2 px-4 rounded-full font-medium
                            shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)] hover:bg-[var(--color-primary-light)] transition">
                        {isOpen ? "Fechar" : "Ver detalhes"}
                    </button>
                </div>

                <div className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0"}`}>
                    <div className="flex gap-3">

                        <Link to={`/atualizarveiculo/${veiculo.id}`} className="w-full py-2 flex items-center rounded-full justify-center font-medium text-sm
                                text-[var(--color-foreground-high)] hover:border hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition">
                            Editar
                        </Link>

                        <Link to={`/deletarveiculo/${veiculo.id}`} className="w-full py-2 flex items-center justify-center font-medium text-sm
                            text-white transition">
                            Deletar
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardVeiculo
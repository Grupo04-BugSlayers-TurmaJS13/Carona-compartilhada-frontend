import type Veiculo from "../../../models/Veiculo";

interface cardVeiculoProps {
    veiculo: Veiculo
}

function CardVeiculo({ veiculo }: cardVeiculoProps) {
    return (
        <>
            <div className="
                bg-[var(--color-background-card)]  border border-[var(--color-stroke)]
                rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:scale-[1.02]
                hover:shadow-[var(--shadow-bip)] transition duration-300">

                {/* IMAGEM */}
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

                    <button className=" mt-3 bg-[var(--color-primary)] text-black
                        py-2 rounded-full font-medium shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)]
                        hover:bg-[var(--color-primary-light)]
                        hover:shadow-[0_0_30px_-5px_rgba(132,204,22,0.6)]transition">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardVeiculo
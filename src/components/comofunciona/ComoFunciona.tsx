import { FaCarSide, FaMapMarkedAlt, FaHandshake } from "react-icons/fa"

function ComoFunciona() {
    const steps = [
        {
            icon: <FaCarSide size={28} />,
            title: "Cadastre seu veículo",
            description: "Adicione seu carro ou moto elétrica e comece a compartilhar viagens."
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: "Defina seu trajeto",
            description: "Escolha sua rota e encontre pessoas indo para o mesmo destino."
        },
        {
            icon: <FaHandshake size={28} />,
            title: "Compartilhe a carona",
            description: "Divida custos, reduza o trânsito e ajude o meio ambiente."
        }
    ]

    return (
        <section className="w-full px-6 md:px-16 bg-[var(--color-background)]">

            <div className="text-center justify-center mb-14">
                <h2 className="rf-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                    Como funciona
                </h2>
                <p className="text-[var(--color-foreground-muted)] mt-3">
                    Simples, rápido e sustentável com o BipBip
                </p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className=" group bg-[var(--color-background-card)] border border-[var(--color-stroke)]
                            rounded-2xl p-6  shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bip)] hover:-translate-y-2
                            transition duration-300">

                        <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-[var(--color-primary)] text-black
                                shadow-[var(--shadow-bip)] group-hover:scale-110 transition">
                            {step.icon}
                        </div>

                        <h3 className="rf-lg font-semibold text-[var(--color-primary)] mb-2">
                            {step.title}
                        </h3>

                        <p className="rf-sm text-[var(--color-foreground-muted)] leading-relaxed">
                            {step.description}
                        </p>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default ComoFunciona
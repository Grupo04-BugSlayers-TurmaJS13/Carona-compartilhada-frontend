import { FaBolt, FaShieldAlt, FaLeaf } from "react-icons/fa";

function Diferencial() {
    const items = [
        {
            icon: <FaBolt size={42} />,
            title: "Rapidez na conexão",
            description: "Encontre ou ofereça caronas em segundos, sem burocracia."
        },
        {
            icon: <FaShieldAlt size={42} />,
            title: "Segurança garantida",
            description: "Perfis verificados para tornar cada viagem mais confiável."
        },
        {
            icon: <FaLeaf size={42} />,
            title: "Mobilidade sustentável",
            description: "Reduza o trânsito e a emissão de CO₂ compartilhando trajetos."
        }
    ];

    return (
        <section className="w-full px-6 md:px-16 bg-[var(--color-background)]">

            <div className="text-center mb-14">
                <h2 className="rf-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                    O Nosso diferencial
                </h2>
                <p className="text-[var(--color-foreground-muted)] mt-3">
                    Mais do que carona — uma nova forma de se conectar
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {items.map((item, index) => (
                    <div key={index} className="group text-center bg-[var(--color-background-card)] border border-[var(--color-stroke)] rounded-2xl p-8
                            shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bip)] hover:-translate-y-2 transition duration-300">

                        <div className="mb-6 text-[var(--color-primary)] flex justify-center group-hover:scale-110 transition">
                            {item.icon}
                        </div>

                        <h3 className="rf-lg font-semibold text-[var(--color-primary)] mb-2">
                            {item.title}
                        </h3>

                        <p className="rf-sm text-[var(--color-foreground-muted)] leading-relaxed">
                            {item.description}
                        </p>

                    </div>
                ))}
            </div>

        </section>
    );
}

export default Diferencial
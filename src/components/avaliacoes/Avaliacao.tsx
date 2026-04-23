function Avaliacoes() {
    const depoimentos = [
        {
            texto: "Melhor app de carona que já usei!",
            nome: "Ana",
            local: "RJ"
        },
        {
            texto: "Muito fácil de usar e realmente ajuda a economizar.",
            nome: "Carlos",
            local: "SP"
        },
        {
            texto: "Encontrei carona rápido e com pessoas super tranquilas.",
            nome: "Juliana",
            local: "MG"
        }
    ];

    return (
        <section className="w-full px-6 md:px-16 bg-[var(--color-background)]">

            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                    O que estão dizendo
                </h2>
                <p className="text-[var(--color-foreground-muted)] mt-3">
                    Experiências reais de quem já usa o BipBip
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {depoimentos.map((item, index) => (
                    <div key={index} className="bg-[var(--color-background-card)] border border-[var(--color-stroke)]
                        rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bip)] hover:-translate-y-2
                        transition duration-300">

                        <p className="text-[var(--color-foreground-high)] text-base italic mb-6">
                            “{item.texto}”
                        </p>

                        <div className="text-sm text-[var(--color-primary-dark)]">
                            — {item.nome}, {item.local}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Avaliacoes;
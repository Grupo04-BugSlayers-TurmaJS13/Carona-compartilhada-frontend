function Metricas() {
    const stats = [
        {
            value: "+500",
            label: "Caronas realizadas"
        },
        {
            value: "+200",
            label: "Usuários ativos"
        },
        {
            value: "+120",
            label: "Veículos cadastrados"
        }
    ];

    return (
        <section className="w-full py-8 px-6 md:px-16 bg-[var(--color-background)]">

            <div className="max-w-5xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    {stats.map((item, index) => (
                        <div key={index} className="bg-[var(--color-background-card)] border border-[var(--color-stroke)]
                            rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bip)] hover:-translate-y-2
                            transition duration-300">

                            <span className="text-xl font-bold text-[var(--color-primary)]">
                                {item.value}
                            </span>

                            <p className="text-[var(--color-foreground-muted)] mt-2 rf-sm">
                                {item.label}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Metricas
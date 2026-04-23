import { Link } from "react-router-dom"
import { PageShell } from "../../components/about/AboutShared"
import Avaliacao from "../../components/avaliacoes/Avaliacao"
import Carousel from "../../components/carousel/Carousel"
import ComoFunciona from "../../components/comofunciona/ComoFunciona"
import Diferencial from "../../components/diferencial/Diferencial"
import MapaPreview from "../../components/mapapreview/MapaPreview"
import Metricas from "../../components/metricas/Metricas"
import VeiculosPreview from "../../components/veiculospreview/VeiculosPreview"

function Home() {

    return (
        <>
            <PageShell>
                <Carousel />
                <div className="py-2">
                    <ComoFunciona />
                </div>
                <div className="py-2">
                    <Diferencial />
                </div>
                <div className="py-2">
                    <VeiculosPreview />
                </div>
                <div className="py-2">
                    <Metricas />
                </div>
                <div className="py-2">
                    <Avaliacao />
                </div>
                <div className="py-2">
                    <MapaPreview />
                </div>

                <section className="w-full py-24 px-6 md:px-16 bg-[var(--color-background)]">

                    <div className="max-w-4xl mx-auto text-center bg-[var(--color-background-card)] border border-[var(--color-stroke)]
                        rounded-[var(--radius-3xl)] p-12 shadow-[var(--shadow-soft)]">

                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
                            Pronto para começar?
                        </h2>

                        <p className="text-[var(--color-foreground-muted)] mb-8">
                            Entre agora no BipBip e comece a compartilhar caronas de forma rápida, segura e sustentável.
                        </p>

                        <Link to="/login">
                            <button className="px-8 py-3 rounded-full font-semibold  bg-[var(--color-primary)] text-black
                                hover:bg-[var(--color-primary-light)] shadow-[var(--shadow-bip)] hover:scale-105 transition duration-300">
                                Entrar no BipBip
                            </button>
                        </Link>

                    </div>
                </section>
            </PageShell>
        </>
    )
}

export default Home
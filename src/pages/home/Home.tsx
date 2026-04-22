import Carousel from "../../components/carousel/Carousel"

function Home() {

    return (
        <>
            <section>

                <article className="w-full h-screen relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <Carousel />
                    </div>
                </article>
            </section>
        </>
    )
}

export default Home
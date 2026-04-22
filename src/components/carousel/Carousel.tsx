import { useEffect, useState } from "react"
import motorista1 from "../../assets/img/motorista1.jpg"
import motorista2 from "../../assets/img/motorista2.jpg"
import carona from "../../assets/img/carona.jpg"
import doguinho from "../../assets/img/doguinho.jpg"
import passageira from "../../assets/img/passageir.jpg"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"

const slides = [
    {
        id: 1,
        img: motorista1,
        title: "Mobilidade inteligente",
        description: "Conecte motoristas e passageiros em segundos com o BipBip.",
    },
    {
        id: 2,
        img: motorista2,
        title: "Carros e motos elétricas",
        description: "Economia, sustentabilidade e tecnologia na sua rotina.",
    },
    {
        id: 3,
        img: carona,
        title: "Compartilhe sua viagem",
        description: "Divida trajetos, reduza custos e ajude o planeta.",
    },
    {
        id: 4,
        img: doguinho,
        title: "Pet friendly",
        description: "Leve seu melhor amigo com conforto e segurança.",
    },
    {
        id: 5,
        img: passageira,
        title: "Experiência segura",
        description: "Avaliações, controle e transparência em cada corrida.",
    },
]

export default function Carousel() {
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isPaused])

    function prevSlide() {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    function nextSlide() {
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    return (
        <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full relative overflow-hidden shadow-[var(--shadow-soft)]"
        >
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className=" relative min-w-full h-[400px] md:h-[600px] lg:h-screen overflow-hidden"
                    >
                        {/* IMAGEM */}
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-full object-cover scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/70"></div>

                        <div className="absolute inset-0 flex items-center px-10 pt-80">
                            <div className="w-full md:w-1/3 pl-6 md:pl-16 lg:pl-24">

                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg ">
                                    {slide.title}
                                </h2>

                                <p className="text-gray-200 font-medium text-md md:text-base lg:text-lg mb-4 drop-shadow">
                                    {slide.description}
                                </p>

                                <button className="bg-primary text-black px-5 py-2 rounded-full font-medium shadow-[0_0_20px_-5px_rgba(132,204,22,0.4)]
                                    hover:shadow-[0_0_30px_-5px_rgba(132,204,22,0.6)]
                                    hover:bg-[var(--color-primary-light)]
                                    transition">
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botões */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-primary px-3 py-2 rounded-full hover:scale-110 transition"
            >
                <MdArrowBackIosNew size={35} />

            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-primary px-3 py-2 rounded-full hover:scale-110 transition"
            >
                <MdArrowForwardIos size={35} />
            </button>

            <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-6 rounded-full cursor-pointer transition ${current === index
                            ? "bg-[var(--color-primary)] shadow-[var(--shadow-bip)]"
                            : "bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
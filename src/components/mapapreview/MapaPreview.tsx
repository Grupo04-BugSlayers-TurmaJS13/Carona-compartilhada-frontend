import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from "react-leaflet";

function FixMap() {
    const map = useMap();

    useEffect(() => {
        const timer = setTimeout(() => {
            map.invalidateSize()
        }, 300)

        return () => clearTimeout(timer)
    }, [map])

    return null
}

function RecenterMap({ position }: { position: [number, number] }) {
    const map = useMap()

    useEffect(() => {
        map.setView(position)
    }, [position, map])

    return null
}

function MapaPreview() {
    const [posicaoUsuario, setPosicaoUsuario] = useState<[number, number] | null>(null);

    const posicoes = [
        { id: 1, nome: "Caronas no Centro", coords: [-22.9068, -43.1729] },
        { id: 2, nome: "Caronas em Copacabana", coords: [-22.9711, -43.1822] },
        { id: 3, nome: "Caronas na Barra", coords: [-23.0, -43.3656] },
    ];

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosicaoUsuario([
                    pos.coords.latitude,
                    pos.coords.longitude
                ])
            },
            () => {
                setPosicaoUsuario([-22.9068, -43.1729])
            }
        )
    }, [])

    if (!posicaoUsuario) {
        return (
            <section className="w-full py-10 text-center text-[var(--color-foreground-muted)]">
                Carregando mapa...
            </section>
        );
    }

    return (
        <section className="w-full py-8 px-6 md:px-16 bg-[var(--color-background)]">

            {/* HEADER */}
            <div className="text-center mb-14">
                <h2 className="rf-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                    Caronas perto de você
                </h2>
                <p className="text-[var(--color-foreground-muted)] mt-3">
                    Veja rotas e pontos disponíveis em tempo real
                </p>
            </div>

            {/* MAPA */}
            <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden
                border border-[var(--color-stroke)] shadow-[var(--shadow-soft)] h-[500px] md:h-[600px]">

                <MapContainer
                    center={posicaoUsuario}
                    zoom={13}
                    className="w-full h-full" // 🔥 importante
                >
                    <FixMap />
                    <RecenterMap position={posicaoUsuario} />

                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap"
                    />

                    {/* Usuário */}
                    <Marker position={posicaoUsuario}>
                        <Popup>Você está aqui</Popup>
                    </Marker>

                    {/* Pontos */}
                    {posicoes.map((p) => (
                        <Marker key={p.id} position={p.coords}>
                            <Popup>{p.nome}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
}

export default MapaPreview;
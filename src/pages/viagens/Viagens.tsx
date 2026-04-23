/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Search, MapPin, Navigation, Plus, Car, Sparkles, SlidersHorizontal, Calendar, X } from "lucide-react";
import CardViagem from "../../components/cardviagem/CardViagem";

const viagensMock = [
  { id: 1, embarque: "Rio de Janeiro", destino: "Niterói", valor: 15, veiculo: { modelo: "Civic", cor_veiculo: "Prata" }, usuario: { nome: "Carlos Mendes" }, status: "ativo", data: "2026-04-22" },
  { id: 2, embarque: "Barra da Tijuca", destino: "Centro RJ", valor: 20, veiculo: { modelo: "Corolla", cor_veiculo: "Branco" }, usuario: { nome: "Ana Silva" }, status: "agendado", data: "2026-04-23" },
  { id: 3, embarque: "Ipanema", destino: "São Paulo", valor: 85, veiculo: { modelo: "HB20", cor_veiculo: "Preto" }, usuario: { nome: "Rafael Lima" }, status: "ativo", data: "2026-04-22" },
  { id: 4, embarque: "Botafogo", destino: "Recreio", valor: 25, veiculo: { modelo: "Onix", cor_veiculo: "Azul" }, usuario: { nome: "Julia Costa" }, status: "ativo", data: "2026-04-24" },
];

export default function Viagens() {
  const [viagens, setViagens] = useState<typeof viagensMock>([]);
  const [embarque, setEmbarque] = useState("");
  const [destino, setDestino] = useState("");
  const [filterDestino, setFilterDestino] = useState("");
  const [filterData, setFilterData] = useState("");
  const [applied, setApplied] = useState(false);

  useEffect(() => { setViagens(viagensMock); }, []);

  const filtradas = viagens.filter(v =>
    v.embarque.toLowerCase().includes(embarque.toLowerCase()) &&
    v.destino.toLowerCase().includes(destino.toLowerCase()) &&
    (!applied || !filterDestino || v.destino.toLowerCase().includes(filterDestino.toLowerCase())) &&
    (!applied || !filterData || v.data === filterData)
  );

  const ativos = viagens.filter(v => v.status === "ativo").length;

  function handleSearch() { setApplied(true); }
  function handleClear() { setFilterDestino(""); setFilterData(""); setApplied(false); }

  return (
    <div className="min-h-screen w-full bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden flex flex-col items-center">
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: "radial-gradient(ellipse, var(--color-primary), transparent 70%)" }}
        />
      </div>

      <main className="relative z-10 w-full max-w-6xl flex flex-col items-center px-6 md:px-12 pt-32 pb-24">

        <section className="w-full flex flex-col items-center text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/8 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.18em]">
            <Sparkles size={12} />
            Sistema Inteligente de Rotas
          </span>

          <h1 className="w-full font-black text-[var(--color-foreground-white)] mb-6 tracking-tighter leading-[0.9] text-center" style={{ fontSize: "var(--text-3xl)" }}>
            Para onde vamos <br />
            <span className="text-[var(--color-primary-light)]">hoje?</span>
          </h1>

          <p className="text-[var(--color-foreground-muted)] mb-12 font-medium max-w-md mx-auto" style={{ fontSize: "var(--text-base)" }}>
            Encontre caronas verificadas na sua região em segundos.
          </p>

          {/* BARRA DE PESQUISA REESTILIZADA - LINHA ÚNICA */}
          <div className="w-full max-w-5xl bg-[var(--color-background-card)] border border-[var(--color-stroke)] rounded-full p-2 pl-6 shadow-2xl flex flex-col md:flex-row items-center gap-2">
            
            {/* Origem */}
            <div className="flex flex-1 items-center gap-3 w-full">
              <MapPin size={18} className="text-[var(--color-primary)] shrink-0" />
              <input
                placeholder="Partida"
                className="bg-transparent w-full outline-none text-[var(--color-foreground-high)] placeholder:text-[var(--color-foreground-low)] font-bold text-sm"
                value={embarque}
                onChange={(e) => setEmbarque(e.target.value)}
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-[var(--color-stroke)]" />

            {/* Destino */}
            <div className="flex flex-1 items-center gap-3 w-full">
              <Navigation size={18} className="text-[var(--color-primary)] shrink-0" />
              <input
                placeholder="Destino"
                className="bg-transparent w-full outline-none text-[var(--color-foreground-high)] placeholder:text-[var(--color-foreground-low)] font-bold text-sm"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-[var(--color-stroke)]" />

            {/* Filtro Extra Destino */}
            <div className="flex flex-1 items-center gap-3 w-full">
              <SlidersHorizontal size={16} className="text-[var(--color-foreground-low)] shrink-0" />
              <input
                placeholder="Filtrar destino..."
                className="bg-transparent w-full outline-none text-[var(--color-foreground-high)] placeholder:text-[var(--color-foreground-low)] font-semibold text-xs"
                value={filterDestino}
                onChange={(e) => { setFilterDestino(e.target.value); setApplied(false); }}
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-[var(--color-stroke)]" />

            {/* Data */}
            <div className="flex flex-[0.7] items-center gap-3 w-full">
              <Calendar size={16} className="text-[var(--color-foreground-low)] shrink-0" />
              <input
                type="date"
                className="bg-transparent w-full outline-none text-[var(--color-foreground-high)] font-semibold text-xs [color-scheme:dark] cursor-pointer"
                value={filterData}
                onChange={(e) => { setFilterData(e.target.value); setApplied(false); }}
              />
            </div>

            {/* Ações */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              {applied && (
                <button 
                  onClick={handleClear} 
                  className="p-3 rounded-full hover:bg-white/5 text-[var(--color-foreground-muted)] transition-colors"
                  title="Limpar Filtros"
                >
                  <X size={20} />
                </button>
              )}
              <button 
                onClick={handleSearch} 
                className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:scale-95 text-black font-black text-sm transition-all shadow-lg"
              >
                <Search size={18} strokeWidth={3} />
                <span className="md:hidden lg:inline">Buscar</span>
              </button>
            </div>
          </div>
        </section>

        <section className="w-full mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-8 border-b border-[var(--color-stroke)] gap-4">
            <div>
              <h2 className="font-black text-[var(--color-foreground-white)] tracking-tight mb-1" style={{ fontSize: "var(--text-xl)" }}>
                Caronas Disponíveis
              </h2>
              <p className="text-[var(--color-foreground-low)] text-sm font-medium">
                {ativos} motorista{ativos !== 1 ? "s" : ""} ativo{ativos !== 1 ? "s" : ""} agora
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-5 py-2.5 rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-background-card)] text-[var(--color-primary-light)] text-xs font-black uppercase tracking-widest">
                {filtradas.length} resultado{filtradas.length !== 1 ? "s" : ""}
              </span>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-[var(--color-stroke)] bg-[var(--color-background-card)] text-[var(--color-foreground-muted)] text-xs font-semibold hover:border-[var(--color-stroke-light)] hover:text-[var(--color-foreground)] transition-all">
                <SlidersHorizontal size={14} />
                Filtros
              </button>
            </div>
          </div>

          {filtradas.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {filtradas.map(v => (
                <CardViagem key={v.id} viagem={v} onReservar={(v) => console.log(v)} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center w-full">
              <div className="h-20 w-20 rounded-3xl bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] flex items-center justify-center mb-6">
                <Search size={32} className="text-[var(--color-foreground-low)]" />
              </div>
              <p className="font-bold text-[var(--color-foreground-muted)] text-lg mb-2">Nenhuma carona encontrada</p>
              <p className="text-sm text-[var(--color-foreground-low)]">Tente ajustar os filtros de busca acima</p>
            </div>
          )}
        </section>

        <section className="w-full flex flex-col items-center text-center rounded-[3rem] border border-[var(--color-stroke)] bg-gradient-to-b from-[var(--color-background-card)] to-transparent p-16">
          <div className="h-20 w-20 rounded-[2rem] bg-[var(--color-primary)] flex items-center justify-center mb-8 shadow-[var(--shadow-bip)]">
            <Car size={38} className="text-black" />
          </div>
          <h3 className="font-black text-[var(--color-foreground-white)] tracking-tight mb-4" style={{ fontSize: "var(--text-xl)" }}>
            Rentabilize seu trajeto
          </h3>
          <p className="text-[var(--color-foreground-muted)] mb-10 font-medium leading-relaxed max-w-md mx-auto" style={{ fontSize: "var(--text-sm)" }}>
            Compartilhe os custos da sua viagem e ajude a comunidade local de forma segura e prática.
          </p>
          <button className="group inline-flex items-center gap-4 px-12 py-5 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:scale-[0.98] text-black font-black text-base tracking-tight transition-all shadow-[var(--shadow-bip)] hover:shadow-[0_20px_50px_-10px_rgba(132,204,22,0.4)]">
            <Plus size={20} strokeWidth={3} className="transition-transform duration-300 group-hover:rotate-90" />
            Oferecer Carona
          </button>
        </section>
      </main>
    </div>
  );
}
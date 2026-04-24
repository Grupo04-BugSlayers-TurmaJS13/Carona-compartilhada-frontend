import { Car, ArrowRight, User } from "lucide-react";
import type Usuario from "../../models/Usuario";
import type Veiculo from "../../models/Veiculo";
import profileimg from "../../assets/profileimg.jpg"


interface Viagem {
  id: number; embarque: string; destino: string; valor: number;
  veiculo: Veiculo; usuario: Usuario; status: string; data?: string;
}
interface CardViagemProps { viagem: Viagem; onReservar?: (viagem: Viagem) => void; }

const statusMap: Record<string, { label: string; color: string }> = {
  ativo:    { label: "Disponível", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  agendado: { label: "Agendado",   color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
};

export default function CardViagem({ viagem, onReservar }: CardViagemProps) {
  const badge = statusMap[viagem.status] ?? statusMap["ativo"];

  return (
    <article className="group relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-[var(--color-stroke)] bg-[var(--color-background-card)] p-8 transition-all duration-500 hover:border-[var(--color-primary-dark)] hover:shadow-[var(--shadow-bip)]">

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: "radial-gradient(600px circle at top left, rgba(132,204,22,0.04), transparent 60%)" }}
      />

      <header className="relative flex items-start justify-between gap-6">
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative shrink-0">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent border border-[var(--color-primary)]/15 flex items-center justify-center">
              <img
                            src={viagem.usuario.foto && viagem.usuario.foto.trim() !== "" ? viagem.usuario.foto : profileimg }
                            alt={`Foto de ${viagem.usuario.nome}`}
                            className="w-20 h-20  rounded-full border-4 border-[#0f0f1a] object-cover shadow-lg"
                        />
            </div>
            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[var(--color-background-card)] bg-[var(--color-success)]" />
          </div>
          <div className="flex flex-col gap-2 min-w-0">
            <h4 className="font-bold text-[var(--color-foreground-high)] text-lg leading-tight tracking-tight group-hover:text-[var(--color-primary-light)] transition-colors duration-300 truncate">
              {viagem.usuario.nome}
            </h4>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] w-fit">
              <Car size={12} className="text-[var(--color-primary)] shrink-0" />
              <span className="text-[11px] font-semibold text-[var(--color-foreground-muted)] uppercase tracking-wider whitespace-nowrap">
               {viagem.veiculo.marca} {viagem.veiculo.modelo} · {viagem.veiculo.cor_veiculo}
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border whitespace-nowrap ${badge.color}`}>
            {badge.label}
          </span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xs font-bold text-[var(--color-primary)] mt-1">R$</span>
            <span className="text-4xl font-black text-[var(--color-foreground-white)] leading-none tracking-tighter">
              {viagem.valor}
            </span>
          </div>
        </div>
      </header>

      <div className="relative flex flex-col gap-6 pl-2">
        <div className="absolute left-[8px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-primary)]/40 via-[var(--color-stroke-light)] to-transparent" />

        <div className="flex items-center gap-4 relative">
          <div className="relative z-10 h-[18px] w-[18px] shrink-0 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-background-card)] shadow-[0_0_10px_rgba(132,204,22,0.4)]" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-foreground-low)] mb-0.5">Origem</p>
            <p className="text-base font-bold text-[var(--color-foreground)] leading-tight">{viagem.embarque}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          <div className="relative z-10 h-[18px] w-[18px] shrink-0 rounded-full border-2 border-[var(--color-stroke-light)] bg-[var(--color-background-card)] group-hover:border-[var(--color-primary)] transition-colors duration-300" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-foreground-low)] mb-0.5">Destino</p>
            <p className="text-base font-bold text-[var(--color-foreground)] leading-tight">{viagem.destino}</p>
          </div>
        </div>
      </div>

      <button
        // onClick={() => onReservar(viagem)}
        className="group/btn relative w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] active:scale-[0.98] text-black font-black text-base tracking-tight transition-all duration-200 shadow-[0_8px_24px_-8px_rgba(132,204,22,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(132,204,22,0.55)]"
      >
        Solicitar Carona
        <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
      </button>
    </article>
  );
}
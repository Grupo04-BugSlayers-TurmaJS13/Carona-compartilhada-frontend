import { Car } from "lucide-react";
import profileimg from "../../../assets/profileimg.jpg";
import type Usuario from "../../../models/Usuario";
import type Veiculo from "../../../models/Veiculo";
import { Link } from "react-router-dom";

interface Viagem {
    id: number; embarque: string; destino: string; valor: number;
    veiculo: Veiculo; usuario: Usuario; status: string; data?: string;
}
interface CardViagemProps { viagem: Viagem; onReservar?: (viagem: Viagem) => void; }

const statusMap: Record<string, { label: string; color: string }> = {
    SOLICITADA:    { label: "Solicitada",   color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    ACEITA:        { label: "Aceita",       color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    EM_ANDAMENTO:  { label: "Em Andamento", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    CONCLUIDA:     { label: "Concluída",    color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
    CANCELADA:     { label: "Cancelada",    color: "text-red-400 bg-red-500/10 border-red-500/20" },
};

export default function CardViagem({ viagem }: CardViagemProps) {
    const badge = statusMap[viagem.status?.toUpperCase()] ?? statusMap["SOLICITADA"];

    return (
        <article className="group relative flex flex-col gap-5 sm:gap-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--color-stroke)] bg-[var(--color-background-card)] p-4 sm:p-8 transition-all duration-500 hover:border-[var(--color-primary-dark)] hover:shadow-[var(--shadow-bip)]">

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: "radial-gradient(600px circle at top left, rgba(132,204,22,0.04), transparent 60%)" }}
            />

            <header className="relative flex flex-col xs:flex-row items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 w-full">
                    <div className="relative shrink-0">
                        <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent border border-[var(--color-primary)]/15 flex items-center justify-center">
                            <img
                                src={viagem.usuario.foto?.trim() ? viagem.usuario.foto : profileimg}
                                alt={`Foto de ${viagem.usuario.nome}`}
                                className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-[#0f0f1a] object-cover shadow-lg"
                            />
                        </div>
                        <span className="absolute -bottom-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-[var(--color-background-card)] bg-[var(--color-success)]" />
                    </div>

                    <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-bold text-[var(--color-foreground-high)] text-base sm:text-lg leading-tight tracking-tight group-hover:text-[var(--color-primary-light)] transition-colors duration-300 truncate max-w-[140px] sm:max-w-none">
                                {viagem.usuario.nome}
                            </h4>
                            <span className={`inline-flex items-center text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border whitespace-nowrap ${badge.color}`}>
                                {badge.label}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[var(--color-background-subtle)] border border-[var(--color-stroke)] w-fit max-w-full overflow-hidden">
                                <Car size={11} className="text-[var(--color-primary)] shrink-0" />
                                <span className="text-[10px] sm:text-[11px] font-semibold text-[var(--color-foreground-muted)] uppercase tracking-wider truncate">
                                    {viagem.veiculo.marca} {viagem.veiculo.modelo} · {viagem.veiculo.cor_veiculo}
                                </span>
                            </span>

                            <div className="flex items-baseline gap-0.5 shrink-0">
                                <span className="text-[10px] sm:text-xs font-bold text-[var(--color-primary)] mt-1">R$</span>
                                <span className="text-2xl sm:text-4xl font-black text-[var(--color-foreground-white)] leading-none tracking-tighter">
                                    {Number(viagem.valor).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="relative flex flex-col gap-4 sm:gap-6 pl-2">
                <div className="absolute left-[8px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-primary)]/40 via-[var(--color-stroke-light)] to-transparent" />

                <div className="flex items-center gap-3 sm:gap-4 relative">
                    <div className="relative z-10 h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] shrink-0 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-background-card)] shadow-[0_0_10px_rgba(132,204,22,0.4)]" />
                    <div>
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[var(--color-foreground-low)] mb-0.5">Origem</p>
                        <p className="text-sm sm:text-base font-bold text-[var(--color-foreground)] leading-tight">{viagem.embarque}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 relative">
                    <div className="relative z-10 h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] shrink-0 rounded-full border-2 border-[var(--color-stroke-light)] bg-[var(--color-background-card)] group-hover:border-[var(--color-primary)] transition-colors duration-300" />
                    <div>
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[var(--color-foreground-low)] mb-0.5">Destino</p>
                        <p className="text-sm sm:text-base font-bold text-[var(--color-foreground)] leading-tight">{viagem.destino}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
                <Link
                    to={`/atualizarviagens/${viagem.id}`}
                    className="w-full py-2 sm:py-2.5 flex items-center rounded-full justify-center font-medium text-sm text-[var(--color-foreground-high)] hover:border hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
                >
                    Editar
                </Link>
                <Link
                    to={`/deletarviagens/${viagem.id}`}
                    className="w-full py-2 sm:py-2.5 flex items-center justify-center font-medium text-sm hover:border rounded-full hover:border-red-600 text-white transition"
                >
                    Deletar
                </Link>
            </div>
        </article>
    );
}
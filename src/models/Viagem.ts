import type Usuario from "./Usuario";
import type Veiculo from "./Veiculo";

export default interface Viagem {
    id: number;
    embarque: string;
    destino: string;
    distancia: number;
    tempo_vigagem: number;
    status: string;
    agendamento: boolean;
    dataAgendamento?: string;
    dataEncerramento?: string;
    formaPagamento: string;
    valor: number;
    veiculo: Veiculo;
    usuario: Usuario;
}
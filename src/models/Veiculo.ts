import type Viagem from "./Viagem";

export default interface Veiculo {
    id: number;
    foto:string;
    tipo: string;
    modelo: string;
    marca: string;
    cor_veiculo: string;
    placa: string;
    viagens: Viagem[];
}
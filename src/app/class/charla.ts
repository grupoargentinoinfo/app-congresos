import { Orador } from './orador';
export class Charla {
    id: number;
    tituloCharla: string;
    resumenCharla: string;
    horaCharla: string;
    horaFinCharla: string;
    oradores: Orador[];
    tema: string;
    tipo: string;
    lugar: string;
}
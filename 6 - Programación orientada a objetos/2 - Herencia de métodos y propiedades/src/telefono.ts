import { Producto } from './producto'

export class Telefono extends Producto {
    marca: string;
    capacidad: number;


    constructor(nombre: string, marca: string, capacidad: number) {
        super(nombre)
        this.marca = marca;
        this.capacidad = capacidad
    }

    llamar(numero: number): boolean {
        // Acciones para realizar la llamada
        return true;
    }

}

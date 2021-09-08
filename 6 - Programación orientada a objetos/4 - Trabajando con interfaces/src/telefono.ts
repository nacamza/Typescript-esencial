import { Producto } from './producto';
import { Pantalla } from './pantalla';

export class Telefono extends Producto implements Pantalla {
    marca: string;
    capacidad: number;

    historial: number[];

    datosMB: string[];

    pulgadas: number;

    constructor(nombre: string, marca: string, capacidad: number) {
        super(nombre)
        this.marca = marca;
        this.capacidad = capacidad
    }

    encender(): boolean {
        return true;
    }

    apagar(): boolean {
        return true;
    }

    llamar(numero: number): boolean {
        // Acciones para realizar la llamada
        return true;
    }

    guardarLlamada() {
        guardarDatos(555666222, this.historial)
    }

    guardarConsumoDeDatos() {
        guardarDatos('1024mb', this.datosMB)
    }

}


function guardarDatos<T>(dato: T, coleccion: T[]) {
    coleccion.push(dato);
}
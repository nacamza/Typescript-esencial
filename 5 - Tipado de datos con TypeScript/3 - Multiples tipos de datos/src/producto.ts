export class Producto {
    nombre: string;

    precio: any;

    estado: number | boolean | string;

    constructor(nombre: string) {
        console.log("Soy un producto");
        this.nombre = nombre;
        this.estado = true;
    }

    info() {
        return 123;
    }

    actividad(estado: number | boolean | string ):void{

    }
}

let precio;

precio = 123;


export const products = [
    { id: 1, name: "Pantalla" },
    { id: 2, name: "Teléfono" },
    { id: 3, name: "Audífonos" }
];
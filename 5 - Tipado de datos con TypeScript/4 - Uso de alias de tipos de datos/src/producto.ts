
type estado = number | boolean | string;

export class Producto {
    nombre: string;

    precio: any;

   // estado: number | boolean | string;

   estatus: estado;

    constructor(nombre: string) {
        console.log("Soy un producto");
        this.nombre = nombre;
        this.estatus = true;
    }

    info() {
        return 123;
    }

    actividad(estatus: estado):void{

    }
}

let precio;

precio = 123;


export const products = [
    { id: 1, name: "Pantalla" },
    { id: 2, name: "Teléfono" },
    { id: 3, name: "Audífonos" }
];
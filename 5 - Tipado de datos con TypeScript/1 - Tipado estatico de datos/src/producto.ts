export class Producto {

    //nombre: tipoDeDato = valor;
    // string
    nombre: string;

    // number
    precio: number = 20;

    // boolean
    garantia: boolean = true;

    // any
    color: any = "#ccc";

    // array
    fabricantes: string[];


    precios: number[];

    historico: any[];



    constructor(nombre: string) {
        console.log("Soy un producto");
        this.nombre = nombre;
    }

    info() {
        return 'Este es un producto';
    }
}

export const products = [
    { id: 1, name: "Pantalla" },
    { id: 2, name: "Teléfono" },
    { id: 3, name: "Audífonos" }
];
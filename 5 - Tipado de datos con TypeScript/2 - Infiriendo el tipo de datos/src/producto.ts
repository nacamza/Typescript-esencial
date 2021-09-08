export class Producto {

    //nombre: tipoDeDato;
    // string
    nombre: string;

    // number
    precio = 20;

    // boolean
    garantia: boolean = true;

    // any
    color: any = "white";

    // array
    fabricantes: string[];

    precios: number[];

    historico: any[];



    constructor(nombre: string) {
        console.log("Soy un producto");
        this.nombre = nombre;
    }

    info(){
       return 123;
    }
}

let precio;
precio = 123;

export const products = [
    { id: 1, name: "Pantalla" },
    { id: 2, name: "Teléfono" },
    { id: 3, name: "Audífonos" }
];
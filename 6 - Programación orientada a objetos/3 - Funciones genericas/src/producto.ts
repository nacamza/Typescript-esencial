
export class Producto {
    nombre: string;
    precio: any;
    valido: boolean = false;

    constructor(nombre: string) {
        console.log("Soy un producto");
        this.nombre = nombre;
    }

    info() {
        return 123;
    }

    get garantia(): boolean {
        return this.valido;
    }

    set garantia(value) {
        this.valido = value;
    }


}
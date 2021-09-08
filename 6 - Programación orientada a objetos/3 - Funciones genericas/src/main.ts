import { Producto } from './producto';

import { Telefono } from './telefono';


let producto = new Producto("123");

producto.garantia = true;



let telefono = new Telefono('mi teléfono', 'patito', 250);
telefono.llamar(555666888333);

telefono.info()
telefono.garantia = true;

class App {

    constructor() {
        console.log("Esta es una nueva app");
    }
}


new App();


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var telefono_1 = require("./telefono");
var producto = new producto_1.Producto("123");
producto.garantia = true;
var telefono = new telefono_1.Telefono('mi teléfono', 'patito', 250);
telefono.llamar(555666888333);
telefono.info();
telefono.garantia = true;
var App = (function () {
    function App() {
        console.log("Esta es una nueva app");
    }
    return App;
}());
new App();

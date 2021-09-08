"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto = (function () {
    function Producto(nombre) {
        console.log("Soy un producto");
        this.nombre = nombre;
    }
    return Producto;
}());
exports.Producto = Producto;
exports.products = [
    { id: 1, name: "Pantalla" },
    { id: 2, name: "Teléfono" },
    { id: 3, name: "Audífonos" }
];

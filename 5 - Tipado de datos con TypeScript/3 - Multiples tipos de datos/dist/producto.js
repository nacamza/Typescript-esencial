"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto = (function () {
    function Producto(nombre) {
        console.log("Soy un producto");
        this.nombre = nombre;
        this.estado = true;
    }
    Producto.prototype.info = function () {
        return 123;
    };
    return Producto;
}());
exports.Producto = Producto;
var precio;
precio = 123;
exports.products = [
    { id: 1, name: "Pantalla" },
    { id: 2, name: "Teléfono" },
    { id: 3, name: "Audífonos" }
];

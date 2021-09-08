"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Producto = (function () {
    function Producto(nombre) {
        this.valido = false;
        console.log("Soy un producto");
        this.nombre = nombre;
    }
    Producto.prototype.info = function () {
        return 123;
    };
    Object.defineProperty(Producto.prototype, "garantia", {
        get: function () {
            return this.valido;
        },
        set: function (value) {
            this.valido = value;
        },
        enumerable: true,
        configurable: true
    });
    return Producto;
}());
exports.Producto = Producto;

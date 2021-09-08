"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var Telefono = (function (_super) {
    __extends(Telefono, _super);
    function Telefono(nombre, marca, capacidad) {
        var _this = _super.call(this, nombre) || this;
        _this.marca = marca;
        _this.capacidad = capacidad;
        return _this;
    }
    Telefono.prototype.llamar = function (numero) {
        // Acciones para realizar la llamada
        return true;
    };
    return Telefono;
}(producto_1.Producto));
exports.Telefono = Telefono;

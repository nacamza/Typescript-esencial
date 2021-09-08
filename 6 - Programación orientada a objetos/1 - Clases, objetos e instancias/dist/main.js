"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var producto = new producto_1.Producto("123");
producto.garantia = true;
var App = (function () {
    function App() {
        console.log("Esta es una nueva app");
    }
    return App;
}());
new App();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var Rx_1 = require("rxjs/Rx");
var _ = require("lodash");
new producto_1.Producto();
var App = (function () {
    function App() {
        console.log("Esta es una nueva app");
        this.timer$ = Rx_1.Observable.interval(1000);
        this.timer$.subscribe(function (data) { return console.log('-->', data); }, function (error) { return console.log(error); });
    }
    return App;
}());
console.log('¿Es arreglo? ', _.isArray(producto_1.products));
new App();

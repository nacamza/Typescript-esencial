import { Producto, products } from './producto'
import { Observable } from 'rxjs/Rx';

import * as _ from 'lodash';

new Producto("123");

class App {

    timer$: Observable<number>;

    constructor() {
        console.log("Esta es una nueva app");
        this.timer$ = Observable.interval(1000);

        this.timer$.subscribe(
            data => console.log('-->', data),
            error => console.log(error)
        )
    }
}

console.log('¿Es arreglo? ', _.isArray(products))

new App();


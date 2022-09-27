import { Product, calculateISV } from "./08_paramsDestructuring";

const carritoCompras: Product[] = [
    {
        desc: 'Tel 1',
        price: 100
    },
    {
        desc: 'Tel 2',
        price: 200
    }
];

const [,igv] = calculateISV(carritoCompras);
console.log(igv);
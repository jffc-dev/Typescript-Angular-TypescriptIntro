export interface Product {
    desc: string;
    price: number;
}

const telefono: Product = {
    desc: 'Nokia A1',
    price: 150
}

const tableta: Product = {
    desc: 'iPad Air',
    price: 350
}

export function calculateISV(products: Product[]): [number, number]{

    let total = 0

    products.forEach(({price})=>{
        total += price;
    })

    return [total, total * 0.18];
}

const items = [telefono, tableta];

const [total,igv] = calculateISV(items);
console.log(igv);

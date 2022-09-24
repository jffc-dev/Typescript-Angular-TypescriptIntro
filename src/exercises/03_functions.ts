function add(a: number, b:number):number{
    return a + b;
}

const addArrow = (a: number, b: number):number => {
    return a + b;
}

function multiply (numeric: number, otherNumber?: number, base: number = 2){
    return numeric * base;
}

// const result = add('Javier',' Flores'); --> invalid type of params
const result1 = add(1,2);

const result2 = multiply(10,20,1);
interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Javier'
}

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['Adriana','Nancy']
}

function printChildren(passenger: Passenger): void{
    const childrenLength = passenger.children?.length || 0;
    console.log(childrenLength);
}

printChildren(passenger1);

// '?' char is used to optional chaining // secure operator
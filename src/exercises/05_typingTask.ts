interface Superhero {
    name: string,
    age: number,
    address: Address,
    showAddress: () => void
}

interface Address {
    street: string,
    country: string,
    city: string
}

const superhero: Superhero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

console.log(superhero.showAddress());

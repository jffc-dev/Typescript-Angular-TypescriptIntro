class NormalPerson{

    constructor(
        public name: string,
        public address: string
    ){}

}

class Hero1 extends NormalPerson {
    // private alterEgo: string;
    // public age: number;
    // static realName: string;

    printName(){
        return this.alterEgo + ", ";
    }

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'Test address');
    }
}

const ironman1 = new Hero1('Ironman1',50, 'Tony Stark');
console.log(ironman1);

console.log(ironman1.printName());

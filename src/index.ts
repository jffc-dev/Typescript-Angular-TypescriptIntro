class NormalPerson{

    constructor(
        public name: string,
        public address: string
    ){}

}

class Hero extends NormalPerson {
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

const ironman = new Hero('Ironman',50, 'Tony Stark');
console.log(ironman);

console.log(ironman.printName());

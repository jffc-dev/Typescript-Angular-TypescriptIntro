class Hero {
    private alterEgo: string;
    public age: number;
    static realName: string;

    printName(){
        return this.alterEgo + ", ";
    }
}

const ironman = new Hero();

console.log(ironman.printName());

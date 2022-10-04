function classDecorator<T extends {new (...args: any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = "new property";
        hello = "override"
    }
}

@classDecorator
class MiSuperClass{
    public myProperty: string = 'ABC123';

    print(){
        console.log('Hello world');
    }
}

console.log(MiSuperClass);



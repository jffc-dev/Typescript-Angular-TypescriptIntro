function whatTypeAmI<T>(arg:T){
    return arg;
}

let testString = whatTypeAmI('Hello world');
let testNumber = whatTypeAmI(100);
let testArray = whatTypeAmI([1,2,3]);

let testExplicit = whatTypeAmI<number>(100);
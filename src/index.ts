// string, boolean, number, ...
let x: number = 10;

x = 12;

console.log(x);

//inferencia x annotation
let y = 12;
// y = "teste"

let z: number = 12;

// tipos básicos
let fistName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

// string != string

console.log( typeof fistName);

fistName = "João";

console.log(fistName);

const myNumbers: number[] = [1,2,3]

console.log(myNumbers)
console.log(myNumbers.length)
// console.log(myNumbers.toUpperCase());
console.log(fistName.toUpperCase());
myNumbers.push(5)

console.log(myNumbers)

// tuplas

let myTuple: [number,string, string[]]

myTuple = [5,"teste",["a","b"]]

// myTuple = [true, false, true]

//object literals -> {prop: value}

const user: {name: string, age: number}  =  {
    name: "Pedro",
    age: 18,
};

console.log(user);
console.log(user.name);

// user.job = "programador"

// any
let a:any = 0

a = "teste"
a = true
a = []

// union type

let id: string | number  = "10"

id = 200

// id = true
// id = []

// type alias
type myIdtype = string | number

const userId: myIdtype = 10
const productId: myIdtype = "00001"
const shirId: myIdtype = 123

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "camisa gola V",
    size: Size.G,
};

console.log(camisa);

//literal types
let teste: "algummvalor" | null

// teste = "outrovalor"
teste = "algummvalor";
teste = null;

//funcoes

function sum(a:number, b:number) {
    return a + b
}

console.log(sum(12,12));
// console.log(sum("12",true));

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Matheus"))

function logger(msg: string): void {
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string): void {
    if(greet){
        console.log(`Olá ${greet} ${name}`)
    }
    else {
        console.log(`Olá ${name}`)
    }
}

greeting('Jose')
greeting('Jose',"Sir")

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams): number{
    return nums.n1 + nums.n2
}

sumNumbers({n1:1, n2:2})

function multiplyNumbers(nums: MathFunctionParams): number{
    return nums.n1 * nums.n2
}

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10,
}

console.log(multiplyNumbers(someNumbers))

// narrowing
// checagem tipos
function doSomething(info: number | boolean) {
    if( typeof info === "number") {
        console.log(`O numéro é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}

doSomething(5)
doSomething(true)

// generics

function showArrayItens<T>(arr: T[]) {
    arr.forEach((item => {
        console.log(`ITEM: ${item}`)
    }))
}

const a1 = [1, 2, 3]
const a2 = ["a","b","c"]

showArrayItens(a1)
showArrayItens(a2)

// classes
class User {
    name: string
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(): void {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`Idade do usuário é ${this.role}`)
        }
        console.log("Informação restrita!")
    }
}

const zeca = new User("Zéca", "Admin", true)

console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);

// interfaces em classes
interface Ivehicolo {
    brand: string
    showBrand(): void
}

class Car implements Ivehicolo {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do caro é ${this.brand}`)
    }
}

const fusca = new Car("VW",4)

fusca.showBrand()

// herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand,wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi",4, 2.0)

console.log(a4);

a4.showBrand()

// decorators

function baseParameters() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdadAt = new Date();
        }
    }
}

@baseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")

console.log(sam)

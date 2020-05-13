//~ Later on reread this TypeScript reference fully to leverage all the useful goodies TypeScript provides
//~ before I learn advanced tricks and tips of TypeScript I first need to get used to the systax and thinking in this TypeScript paradigm 
//three typeCherckers you could use:
//% elem, interface, type
//besides that you can declare type in:
//% function paramaters, declare what type of return
//One of the best parts of TypeScript perhaps is error checking not in run time where it tells you your fuckups

// type // inforcing the 'type' of a veriable
// interface // inforcing the shape of objects 

//var name , type of string
let color: string = "blue";
let list: number[] = [1, 2, 3];
enum Color { Red = 1, Green, Blue } //better objects
let x: [string, number];
x = ["hello", 10]
let hex: number = 0xf00d;
let notSure: any = 4;


//In this example you see there's no way 
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label); //no way of getting object undefined cause 
  //values will have to be 'validated' through interface first
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig { // interface properties aren't required with ?:
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } { // {color: string; area: number} what the function returns
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  } //This opens a whole new world to me and checking if value exists is now painless
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });


//js
// let font === 'italic'
// if (font === 'bold' || font === 'italic' | font === 23) {
// let fontStyle = font
//vs ts
type Style = 'bold' | 'italic' | 23
let fontStyle: Style
fontStyle = 'something' // err, doesn't get assigned and ts notfies of your err
fontStyle = 'italic' // correct!

interface Person {
  first: string
  last: string
  [key: string]: any //with this we specified first and last tp be required and can add any additional properties to the object
}

function pow(x: number, y: number): string { //': string' specifying the return value to be
  return Math.pow(x, y).toString()
}

function pow1(x: number, y: number): void { //specifies to not return anything
  Math.pow(x, y).toString()
}

const arr: boolean[] = [];

arr.push(1)
arr.push('23')
arr.push(false)

//called a tuple
type MyList = [number, string, boolean]
let myList: MyList = [1, 'green'] //deminsatration of what would't pass

type MyList2 = [number?, string?, boolean?]
let myList2: MyList2 = [1, false]


let suits = ["hearts", "spades", "clubs", "diamonds"];

// Here, the pickCard function will return two different things based on what the user has passed in.
// If the users passes in an object that represents the deck, the function will pick the card. 
// If the user picks the card, we tell them which card they’ve picked.
// But how do we describe this to the type system?
function pickCard(x: { suit: string; card: number; }[]): number; //These are called overloads. They schemas in a way but properly called type checkers
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

//Generics
const last = <T>(x: T[]) => {
  return [x]
}
const l = last([1, 2, 3])
const l2 = last<string | number>([1, 'b', 'c']) //declaring types here

const makeFullName = (obj: { firstName: string, lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}
const v4 = makeFullName({ firstName: "Bob", lastName: 'Allen', age: 15 }) //extra params

const makeFullName2 = <T extends { firstName?: string, lastName: string }>(obj: T) => { //extrap params made possible
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}
const v42 = makeFullName2({ firstName2: "Bob", lastName: 'Allen', age: 15 })
v42 //hover to see something

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>; // made a new type
type stringTab = Tab<string>;

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}
// both are same
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

//enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}// In other words, if you were debugging and had to read the runtime value of a numeric enum, the value is often opaque - it doesn’t convey any useful meaning on its own (though reverse mapping can often help), string enums allow you to give a meaningful and readable value when your code runs, independent of the name of the enum member itself.
enum E1 { X, Y, Z }
enum E2 {
  A = 1, B, C
}
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length
}
enum Response2 {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response2): void {
  // ...
}
respond('Daniel', Response2.Yes)
//giving contraints to what you can pass in. Very useful indeed

//reverse mapping #
enum Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
//Keep in mind that string enum members do not get a reverse mapping generated at all.

//const enums #
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

//### Type Inference ###
let y = 3 //variable is inferred to be number

let x2 = [0, 1, null]; //assigns type of number or null implicity
x2 = ['3'] // string is not one the options

let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
//* all correct, we just hadn't created those arguments but basically your telling let zoo to only allow the classes from Animal[] 

//### Contextual Typing ### //~ basically it infers to what properties the object and if we'd call some property that doesn't exist on the object then TypeScript will throw an error
window.onscroll = function (uiEvent) {
  console.log(uiEvent.button); //<- Error!
}

//# Type compatibility #
let x3 = (a: number) => 0;
let y3 = (b: number, s: string) => 0;

y3 = x3; // OK
x3 = y3; // Error

//*_____________________
enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((e as MouseEvent).x + "," + (e as MouseEvent).y));
listenEvent(EventType.Mouse, ((e: MouseEvent) => console.log(e.x + "," + e.y)) as (e: Event) => void);

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));
//*____________________________

//~ Advanced Types
//# Type Assertion #
const myInp: HTMLInputElement = document.getElementById('myInp') //err
const myInp2: HTMLInputElement = <HTMLInputElement>document.getElementById('myInp') // k
const myInp3: HTMLInputElement = document.getElementById('myInp') as HTMLInputElement // k
//%-----start-------
interface Bird {
  fly();
  layEggs();
}
interface Fish {
  swim();
  layEggs();
}
function getSmallPet(): Fish | Bird {
  // ...
}
let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors

// Each of these property accesses will cause an error


if (pet.swim) pet.swim();
else if (pet.fly) pet.fly() // err

if ((pet as Fish).swim) (pet as Fish).swim()
else if ((pet as Bird).fly) (pet as Bird).fly() // k

//"pet as Fish" means assigning the interface Fish to pet variable

const namess = (name: string): void => {
  console.log(name)
  return name // err. void type present
}

pet.swim(); //err cause pet = getSmallPet() which thats: Fish | Bird so we could do the following \/
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined; //if exists then return
}
if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}
//or 
function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}
//%-----end-------

function isNumber(x: any): x is number { //bad way of doing it 
  return typeof x === "number";
}
function isString(x: any): x is string {
  return typeof x === "string";
}
function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
//vs better way of doing
function padLeft2(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

//% if (padder instanceof SpaceRepeatingPadder) {} 
//this checks if class is an instance of a certain class... called instances rather then child as React for components hierarchy

function f(sn: string | null): string {
  return sn || "default"; //return either or
}

type Name = string;
type NameResolver = () => string; //?
type NameOrResolver = Name | NameResolver; //doesn't create a new type but simply refers to the types it consists of
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  }
  else {
    return n();
  }
}

//differnce between 
type Container<T> = { value: T };
//and
type Container2 = { value: any };
//is that with generics you can call expliclty state in the function call what type(s) are allowed:
let obj: Container<string> = { value: 'something' }
obj.value = false //doesn't allow boolean cause we contrained it allowing only 'string'
//@ vs
let obj2: Container2 = { value: 'true' }
obj2.value = 23 //any value is permitted


// import React from 'react'

//* This is my only JavaScript reference. All on and clear up the more JavaScript I learn.
//! Tips in working with javascript. Always look for {} [] () ; , in the code your looking at. These are the biggest factors of what belongs to what.  
// const Experimental = ({textForButton}) => {
  //!*?============console logging===========
  
  let comment = 'color: cyan';
  let title = 'color: orange; font-weight: bold;'
  
  let fam = ["brother", "sister", "mother", "father"];
  let housePets = ["mouse", "fish", "cat", "dog"];
  console.log('Console logging', title);
  console.log({ fam, housePets });
  console.table([ fam, housePets ]);                                                    //*displaying all these in a table
  
  //!*?======Arrow functions==========
  
  const example = function() { //* regular expression. 
    // code to execute
  }
  example();
  
  const example2 = () => {
    // code to execute
  }
  example2();
  
  // eslint-disable-next-line 
  var example3 = parameter1 => {                       //* when there is only one parameter, the parentheses can be ommitted.
    // code to execute
  }                              

  //! there's more 
  
  //!*?===========Escape characters============
  console.log('%c                Escape characters section (only visible in the code)', title);
  // eslint-disable-next-line 
  let backslashEscapeCharacter = 'We\'re safely using an apostrophe in single quotes.'; // eslint-disable-next-line 
  const threeLines = `This is a string
  that spans across
  three lines.`;  

  //!*?==========How to index, split & minipulate a string== all of these functions e.g. charAr(), indexOf() , split() are built in functions 
  console.log('%c                How to index, split & minipulate a string', title );

  //*                                                                                String primitives: 
  const stringPrimitive = "a new string.";
  //*                                                                                String objects: 
  // eslint-disable-next-line 
  const stringObject = new String('A new string.');                                                       //! React warns me not to use string as a constructor
  console.log(typeof stringPrimitive); 
  console.log(typeof stringObject);
  console.log(stringPrimitive[6]);                                                                        //* this shows me what's in place of that index...
  console.log(stringPrimitive.charAt(6));                                                                 //* ... or you could use this method 
  console.log(stringPrimitive.indexOf("n"));                                                                   // value 2
  console.log(stringPrimitive.lastIndexOf("n"));                                                                   //value 10
  const paoSystemP = "James_Bond Volk Simen Triplets Evalina Julia Katya Daniel_Ch Pops Lilya";
  const splitPaoSystemP = paoSystemP.split(" ");                                                          //* this converts string into a fullly fledged array with " ",
  console.log(splitPaoSystemP);
  const replaceFuncPaoP = paoSystemP.replace("new", "old");
  console.log(replaceFuncPaoP + 'replaced "new" with "old"');
  //*                                                                                                       strings are treated as arrays and vice-versa therefore the same set of methods would work for both data types:
  //*                                                                                                       slice, .length, 
  

  //!*?======Mutaton methods (on arrays)================= all these methods are built into 
  console.log('%c                Mutator methods (on arrays)', title);

  let nestedArray = [
    [
        "salmon",
        "halibut",
    ],
    [
        "coral",
        "reef",
    ]
  ];

  console.log('%c accessed an item in a nested array', comment, nestedArray[1][0], );             //accessed an item in a nested array
  nestedArray[1] = "sushi";
  let array = ["something", "somethingElse", "andSomethingElse, I like possicles",];
  console.log(array.length);
  array.pop();                                                                                    //deleted the last item 
  array.shift();                                                                                  //removes the first element
  array.push("chickenFingers");                                                                   //added to the end of the list
  array.unshift("shark, swordfish");                                                              //adds new elements to the beggining of the list 
  array.splice(0, 1, "animals");                                                                   //* splice(index number, number of items to remove, items to add) you can simply leave the 3rd parameter blank to just delete an item from a list
  array.reverse();                                                                                 //reverses the order  
  array.fill("ladies");                                                                            //fills all used indeces 
  let difArray = ["something", "somethingElse", "andSomethingElse",];
  difArray.fill("dudes", 2);                                                                       //fills all used indeces 
  difArray.fill("girls", 0, 2);                                                                     //fills all used indeces 
  let difArray2 = ["bananna", "4lobster", "apple", '1cat', "raspberry", 'Zebra', "apple"];
  let difArray2Unsorted = difArray2.slice();                                                         //no arguments so therefore it copies the whole array 
  difArray2.sort();                                                                                  //sorts them in alphabetic and numberic order order
  array.splice(0, 2, null);                                                                          //*spliced the array to have value of null. splice means replace with the given value in the 3rd parameter

  //!*?====Accessor methods (on arrays). Create a new copy of or representaion of an array==============
  let concatinated2ArraysTogether = array.concat(difArray2);                                                  //* concat short for concatinates. This line of code oncatinates 2 arrays together and assinging it to a variable 
  console.log(Array.isArray(array));                                                                          //* true
  console.log(Array.isArray(stringPrimitive));                                                                //* false
  console.log(concatinated2ArraysTogether);
  let madeArrayIntoString = concatinated2ArraysTogether.join(', ');                                            //converts array into a string
  let copiedPortionOfArray = concatinated2ArraysTogether.slice(2, 6);                                           //copied only a portion of the array from index 2 to 6, not including 6. Slice(2) wold copy from index of 2 and the rest 
  console.log(copiedPortionOfArray);                                                                            //! just realized I didn't need to assign a new variable everytime I've used a method. I could have done it all in console.log as I did a line beneath 
  console.log(difArray2Unsorted.indexOf("apple"));                                                              //tells me the index of the first instance of the itemm in the array
  console.log(difArray2Unsorted.lastIndexOf("apple"));                                                          //tells me the index of the last instance of the item in the array

  //~ Where I left at last
  //!*?======Iteration methods (on arrays)==========
  console.log('%c                Iteration methods (on arrays)', title);
  
  let fish = [ "piranha", "barracuda", "cod", "eel" ];
  fish.forEach(individualFish => {                                        //* forEach() prints out each item in the array
    console.log(individualFish);
  })

  for (let i = 0; i < fish.length; i++){
    console.log(fish[i]);                                                 //* this loops through the length of the array
  }
  //*======================= filter()
  const ages = [ 23, 57, 34, 115, 12, 45, 15, 12 ];
  const canDrink = ages.filter(function(age) {
    if(age >= 21) {
      return true;
    }
  });                                                    //! not using an arrow funcion brings up an annoying warning
  console.log(canDrink);

  //!                                                    another way of writing the filter method is written with an arrow function 
  const canDrink2 = ages.filter(age => age >= 21);
  console.log(canDrink2);   
  //*======================= map()                           map() is very powerful. With map you would may a copy of the variable and minipulate the copy/result however you want, copy over only a selected few variables from the original or if a number then you could do some arithmetics with it.
  let companies = [
                    {name: "tjmax", category: "cothing store", start: 1343, end: 4322},
                    {name: "nike", category: "shoes", start: 1754, end: 4545},
                    {name: "oculus", category: "vr", start: 1356, end: 4534},
                    {name: "samsung", category: "phones", start: 1678, end: 4996},
  ];
  const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  console.log(companyNames);                                //* what this says this says. Make a copy of the array and return only the name and the start and end as a string. Now the next time you console.log const companyName it will display the only that which we asked to result in. 

  const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);
  console.log(ageMap);
  //*======================= sort()
  // const sortedCompanies = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }                                               //*sorted thing by the year
  // });
  //*                     another way of doing the same thing but more concisely.
  const sortedCompanies = companies.sort((a, b) => (a.start > b.start? 1 :-1));       //* how this works is that js intterates through the array and assigns every 2 items an "a" and a "b" or whatever we passed in the parameters. Then we told it that if "a" is greater than "b" then return 1 or else return -1. And then the system will organize the 1 and -1 putting the first ones in the beggining of the list and the negative ones after the positive ones.
  console.log(sortedCompanies);

  const sortAges = ages.sort();                 //* this only sorts the first digit of the item. So the 110 apears to be the first on the list when it should be last
  console.log(sortAges);

  const sortAges2 = ages.sort((a, b) => a - b); //* this way it doesn't sort the items by the very first digit but by the true value of every individual item
  console.log(sortAges2);

  //*======================= reduce()            The reduce() method will reduce an array to a single value. Totalling basically
  const ageSum = ages.reduce((total, age) => total + age, 0);
  console.log(ageSum);

  const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);             //* the non-arrow method of adding everything up
  }, 0);                                                            //! return means the end result that will be stored in the variable we've assigned it to
  console.log(totalYears);
  
  const combined = ages         //* Combined methods.   We wanted to create a new variable that took the age and multiplied it by to 
  .map(age => age * 2)           //* arrow function: passed in age in the parameter and multiplied every number by 2. Notice, there's no ";" at the end. the next method "filter" is attached to this one. They can be on one line.
    .filter(age => age >= 40)    //* passed in age in the parameter and returned every that ran through the first method of multiplying the array by 2 filter through all items greater than 40
    .sort((a, b) => a - b)       //* The (a, b) are arguments in the parameters
    .reduce((a, b) => a + b, 0);
  console.log(combined);
    
  
  //!*?==================find()
  
  let seaCreatures = [ "whale", "octopus", "shark", "cuttlefish", "flounder" ];
  
  const bookmark1 = bookmark => { return [ "cutterfish", "octopus" ].includes(bookmark); //* this method of include() creates a sort of a book mark in the array
}
console.log(seaCreatures.find(bookmark1)); //* it'll find the first instance of the array

  //!*?==================findIndex() 
  
  console.log(seaCreatures.findIndex(bookmark1)); //* instead of the item we'll find the index of that item where our bookmark isx
  
  //!*?==================Objects. This place needs a little clean up
  console.log(`%c Here we've learned the difference between properties and methods, how to create objects, and how to add, remove, modify, and loop through object properties. `, comment);
  //* objects are arrays that take any data type and instead of using indices they used keys. 
  //* methods are functions that are contained within an object
  const objectLiteral = {};               //* object literal
  const objectConstructor = new Object(); //* object constructor. Not the perfered method to use commonly
  const gimli = {
    name: 'Gimli', //* a property is the association between the name(key) and value within an object, and it can contain any datatype. 
    race: 'drawf',
    weapon: 'axe',
    greet: function() { //* this is a method greet()
      return `Hi, my name is ${this.name}!`; //* 'this' refers to the object itself; gimli
    },
  };  //! there's a ";" here because it's not a block of code but an object/array like thing
  gimli.age = 139;                       //* can add or assign another property like this. 
  gimli["weapon"] = "legendary axe";      //* or can done this way
  gimli.fight = function() {
    return `Gimli the ${this.age} migit attachks with an ${this.weapon}.`;  
  }
  console.log(gimli); 
  console.log(gimli.fight());
  delete gimli.weapon;
  console.log(gimli);
  
  console.log('%c Converted everything to CAPS. This method of looping is spacifically meant for iterating through over the properties of an object. for... in should not be confused with for.. of. That is for iterating through arrays  ', comment)
  for (let key in gimli) {
    console.log(key.toUpperCase() + ':', gimli[key]); //* bracket notation is a must here to accesss the key
  } //* we've converted keys to uppercase and then displayed it into the console

  console.log(Object.keys(gimli)); //* this will return an array of the object's keys.

  //!*?============================Date and Time in JavaScript
  
  const now = new Date(); //time of now
  console.log(now);  
  const now2 = new Date("October 6 2019 19:30"); //in string form
  console.log(now2);
  const now3 = new Date(1776, 6, 4, 12, 30, 0, 0);   //*new Date(year, month, day, hours, minutes, seconds, milliseconds);
  console.log(now3);
  
//   //*Retrieving the data with the 'get' method
//*!? Date/Time         	Method	          Range   Example
//*!? Year                getFullYear()	    YYYY    1970
//*!? Month	              getMonth()	      0-11    0 = January
//*!? Day (of the month)	getDate()	        1-31    1 = 1st of the month
//*!? Day (of the week)	  getDay()	        0-6	    0 = Sunday
//*!? Hour              	getHours()	      0-23  	0 = midnight
//*!? Minute	            getMinutes()	    0-59	
//*!? Second           	  getSeconds()	    0-59	
//*!? Millisecond	        getMilliseconds()	0-999	
//*!? Timestamp	          getTime()	        Milliseconds since Epoch time


//*!? Date/Time	          Method          	Range	  Example
//*!? Year	              setFullYear()   	YYYY	  1970
//*!? Month   	          setMonth()      	0-11	  0 = January
//*!? Day (of the month)	setDate()	        1-31	  1 = 1st of the month
//*!? Day (of the week)	  setDay()        	0-6	    0 = Sunday
//*!? Hour              	setHours()	      0-23	  0 = midnight
//*!? Minute	            setMinutes()    	0-59	
//*!? Second	            setSeconds()	    0-59	
//*!? Millisecond	        setMilliseconds()	0-999	
//*!? Timestamp	          setTime()	        Milliseconds since Epoch time	

  //*  you could also use the UTC (Coordinated Universal Time) standard.

  console.log(`%c At this point we can now make almost any change we want to the DOM`, comment);
//!*?============================Events=============================
  console.log(`%c By learning about events, we will understand how to tie everything together to make interactive websites.`, comment);
  
  const changeText = () => {
    const pineapple = document.querySelector('p');
    pineapple.textContent = "changed when entered.";
  }
  const changeAgainWhenLeft = () => {
    const pineapple  = document.querySelector("p");
    pineapple.textContent = "changed when left."; //! how to fire two events and how can I make it so the textContent was changed back to it's original state. Will I have to make it display: none; and then display: block for this to work?
  }
  //* look at the xml. There you'll find an event onClick that fires chageText()
//!*?==============================JSON.stringify()

//* The JSON.stringify() function converts an object to a JSON string.
//* JSON.parse() is a secure function to parse JSON strings and convert them to objects.

//!*?==============================conditional statements
  let grade = 87;

  if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }

  //* Ternary Operator-  also known as the conditional operator, is used as shorthand for an if...else statement.
    //* (condition) ? expression on true : expression on false
  let age = 20;
  const oldEnough = (age >= 21) ? "You may enter." : "You may not enter.";

//!*?=================switch statement


// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}

//*!?==============while and do... while

// Set a condition to true
const iceCapsAreMelting = true;
let polarBears = 5;

// Initiate infinite loop
while (iceCapsAreMelting) {
  console.log(`There are ${polarBears} polar bears.`);
  polarBears--;
  // Terminate infinite loop when following condition is true
  if (polarBears === 0) {
    console.log("There are no polar bears left.");
    break; //* completely stops this script
  }
}
//*Loops: While; this is a loop that executes while a condition is true. do... while: execute at least once and execute while condition is true. Loop; you tell how many times to itterate through. 
//* if: case; better with many choices, ternary; quick and concise.


let x = 0;

do {
    x++;
    console.log(x);
} while (false); //* the do... while will always execute at least once.

//!*?==============For loop
// for (initialization; condition; final expression) {
  // code to be executed
// }
let arrayExample = [];
for (let i = 0; i < 3; i++) {
    arrayExample.push(i);
    console.log(arrayExample);
}
//* for...in is an extremely useful way to iterate through object properties.

var string1 = "";
var object1 = {a: "apple", b: "orange", c: "bannana"};

for (var property1 in object1) {
  string1 += object1[property1];
}
console.log(string1);
// expected output: "123"


//* for...of is used to iterate through the properties of an object

let sharks = [ "great white2", "tiger2", "hammerhead2" ];
for (let shark of sharks) {
    console.log(shark);
}
// Loop through both index and element
for (let [index, shark] of sharks.entries()) {
  console.log(index, shark);
}

//* A string can be iterated through in the same way as an array
let sharkString = "sharks";
for (let shark of sharkString) {
    console.log(shark); //this will output every letter individually
}


//!*? ==========
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }// we have a single parameter inside the parentheses

  greet("Sammy"); //"Sammy" is the argument
  
//* =========Function declarations
function bar() {
  return 3;
}

bar() //3

//*Function expressions
var a = function() {//anonymous function expression
  return 3;
}

var a = function bar() {//named function expression
  return 3;                 
}

// (function sayHello() {//self invoking function expression though in gatsby this way does not work
//   console.log("hello!");
// })();

//!*?============Prototypes and inheritance. This is very fuzzy to me but i'll write it down for reference and then modify it when I get around needing to know and use these. Right now I got no idea as to what the hell this really is.
//*every object in JS has a internal property called [[Prototype]]. I believe it is used in for constructor functions where you create a new function that inharites everything from the constructor function.
let y = {}; //to find the [[Prototype]] of this newly created object we execute the next code
let z = [];
console.log(Object.getPrototypeOf(z)); //another way would be x.__proto__; the output would be the same but is not good for production.   //[[Protoype]] is a means of linking two or more objects together
console.log(z.__proto__); //* same as the line above 
console.log(z.__proto__.__proto__); //* y -> Array -> Object

console.log(z.__proto__ === Array.prototype);            //* true. testing to see if they refer to the same thing
console.log(z.__proto__.__proto__ === Object.prototype); //* true
//* or 
console.log(Array.prototype.isPrototypeOf(z));      //* true
console.log(Object.prototype.isPrototypeOf(Array)); //* true. idk what what this gets at the moment

console.log(z instanceof Array); //* true //We can use the instanceof operator to test whether the prototype property of a constructor appears anywhere within an object’s prototype chain.
//*======= constructor functions
//* there are build in JavaScript constructors, such as new Array() and new Date(). But we can create our own custom templates from which to build new objects.
//! we are going to make certain objects not accessible to certian prototypes; properties, values, etc. We are going to make it so the objects have access only to their own properties.
function Hero(name, level) { //* we capitalized the first letter of a constructor function by convention.
  this.name = name;     //* we've assigned the arguments of the parameters with the this.name in order for other classes ro refer to this function.
  this.level = level; //*You may notice that we’ve only defined properties and not methods in the constructor. It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.
} 
Hero.prototype.greet = function () { 
return `${this.name} says hello.`;
}                                            //! whatever that variable isn't used in the constructor will be attached with prototype as a extension.
let heroOne = new Hero('Bjorn', 1); //* and that's how you created a new inharatance object
console.log(heroOne);
console.log(heroOne.greet()); 
console.log(Object.getPrototypeOf(heroOne)); //* hero1.__proto__ has the same output but it's not the proper method to use.
function Warrior(name, level, weapon) {
  Hero.call(this, name, level); //* this is the Chain constructor 
  this.weapon = weapon;
}
Warrior.prototype = Object.create(Hero.prototype); //* this is how you link the prototypes from the main constructor Hero to the the lower constructor Warrior.
Warrior.prototype.attack = function () { 
return `${this.name} attacks with the ${this.weapon}`;
}
function Healer(name, level, spell) { 
  Hero.call(this, name, level); //* we'll use the call() method to copy over properties/linking 2 constructors together from Hero to this constructor 
  this.spell = spell;
}
Healer.prototype = Object.create(Hero.prototype);
Healer.prototype.heal = function() {
  return `${this.name} casts ${this.weapon}.`;
}
const hero1 = new Warrior('Bjon', 1, 'axe'); //* We've created Hero constructor, set proptotype of greet() and under that constructor we've set another 2 constructors; Warrior & Healer and for those we've set prototypes. and then created our charaters; hero1 & hero2. They inherit everything from the Hero constructor
const hero2 = new Healer('Kanin', 1, 'cure'); //* every arg is passed in the parameters we've personally set/created from constructors that chained it down to this level. 
console.log(hero1.attack());
console.log(hero2.greet()); 

//* a method are actions that can be performed on objects.
//!**?================ Understanding Classes.    They often discribed as "syntactical sugar" over prototypes and inheritance in that they offer a cleaner and more elagant syntax than the mimicing of classes/an object-oriented design pattern with constructor function. 

const b = function() {}
//! vs class
const c = class{}
//-------------
function HeroPrototypeBased (name, level) {
  this.name = name;
  this.level = level;
}
Hero.prototype.greet = function() {
  return `${this.name} say hello.`;
}

//! vs class

class HeroClassBased {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {                               // the method here is directly assgined in the class. Looks alot like gatsby to me.
    return `${this.name} says hello.`; 
  }
}
const heroA = new HeroClassBased('Varg', 1);
console.log(heroA);
//-------------
function MagePrototypeBased(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}
const heroB = new MagePrototypeBased('Lejon', 2, 'Magic Missile');
console.log(heroB);

//! vs class

class MageClassBased extends Hero {
  constructor(name, level, spell) {
    super(name, level); //* super() is used in place of call()
    this.spell = spell; //added a new property
  }
}
const heroC = new MageClassBased('Legon', 2, 'Magic Missile');
console.log(heroC);                                                                     //! ascertian how to access properties within a class. all of these things are currently within a class of Experimentation. 

//!**?=========== How to use Object Methods 

const job = {
  position: 'cashier',
  type: 'hourly',
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable ? 'is accepting applications' : 'is not currently accepting applications';
    console.log(`This ${this.position} position is ${this.type} and ${accepting}.`);
  }
};

const barista = Object.create(job); // * Object.create is how to pass in properties from another object. Keeping it nice and DRY

barista.position = "barista";
barista.showDetails();

//*=======Object keys() this get's the keys of an object
const employees = {
  boss: 'Dennis',
  secretary: 'Pam',
  sales: 'Jim',
  accountant: 'Oscar,'
};

const keysOfObject = Object.keys(employees); //* prints into the console in an array form but not an array. I think it's a string 
console.log(keysOfObject);
const lengthKeys = Object.keys(employees).length; //* also useful for checking the length of an object.
console.log(lengthKeys);

//*========Object.value() creates an array out of an object properties

const employeesArray = Object.values(employees);
employeesArray.push("happy");
console.log(employeesArray); 

//*========Object.entries() creates a nested array of the key/value pairs of an object.
const employeesNestedArray = Object.entries(employees); 
console.log(employeesNestedArray);
//*                          Once we have the key/value pair arrays, we can use the forEach() method to loop through and work with the results.
employeesNestedArray.forEach(emplye => {
  let key = emplye[0];
  let value = emplye[1];

  console.log(`${key}: ${value}`);
});

//*======== object.assign() is  used to copy a value from one object to another. We can create two objects and merge them together.

const name = {
  firstName: 'Philip',
  lastName: 'Fry'
};

const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express'
};

const character = Object.assign(name, details); //* Merged/copied over 2 objects into one 
const charater2 = {...name, ...details}; //does practically the same thing. //* This spread syntax in object literals is also known as shallow-cloning.
console.log(character, charater2);
//*======== Object.freeze()
const newName = Object.freeze(name);
// newName.firstName = 'Daniel';
// newName.lastName = 'Aleksandrov'; //* Gatsby says that you cannot do this which is exactly what was supposed to happen
console.log(Object.isFrozen(newName)); //true  //* this is used to determine if an object is frozen of not

//!**?=========== Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties.

const newDetailSeal = Object.seal(details);

newDetailSeal.job = 'Farmboy';
// newDetailSeal.rates = "15/hr"; //* you can modify the Object but you cannot add a new property. Gatsby just crashes on he here.

//* We can see in the output that the prototype of the employees array has access to pop, find, and other Array prototype methods. We can confirm this by testing the employees prototype against Array.prototype.
const fruits = ['apple', 'oranges', 'watermelon']; 
console.log(Object.getPrototypeOf(fruits) === Array.prototype); // true. //* to get the internal hidden [[Prototype]] of an object and to check if it has access to the pop, find and other Array proptotype methods.

//!**?==========='this', bind, call and apply 

console.log(this); //*if typed this into the console 'this' would refers to the window

function printThis() {
  console.log(this); 
}
printThis() //* even wthin a function 'this' refers to the window. However when using 'strict mode', 'this' here would be undefined. 

//*========== An Object Method. A method is a function on an object, or a task that an object can perform. 

const america = {
  name: 'This United States of America',
  yearFounded: 1776,
  details: {
    symbol: 'eagle',
    currency: 'USD',
    printDetail() {
      console.log(`This symbol is the ${this.symbol} and currency is ${this.currency}.`); //* But in a object 'this' would refer to the object itself which in this case is america. 'this' is in a nested object, 'this' will always within an object refer to it's object scope. 
    }
  }
}
america.details.printDetail();

//*=========== A Function Constructor
function Country(name, yearFounded) {
  this.name = name                                          
  this.yearFounded = yearFounded

  this.describe = function() {                                             //* in a constructor 'this' would refer itself. 
    console.log(`${this.name} was founded in ${this.yearFounded}.`);
  }
}
const america2 = new Country('The United States of America', 1776);
america2.describe();
//! Vs. class. 
class Country2 {
  constructor(name, yearFounded) {
    this.name = name
    this.yearFounded = yearFounded                                            //* 'this' keyword is bond to the constructer just like the prototype function example above
  }
  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  }
}
const america3 = new Country2('The United States of America', 1776)
america3.describe()

//*======== A DOM Event Handler. 
// const button = document.createElement('button')
// button.textContent = 'Click me'
// document.body.append(button)

// button.addEventListener('click', function(event) {
//   console.log(this); //* in an .addEventListener, the 'this' keyword is refered to the event.currentTarget which means in this case what was clicked since click is the event
// });


//!**?=========== Explicit Context. Using call, apply, or bind, you can explicitly determine what this should refer to.

//*============Call and Apply.  -The difference between them both is that call requires the arguments to be passed in one-by-one, and apply takes the arguments as an array.
const book = {
  title: 'Think and Grow Rich',
  author: 'Nepoleon Hill',
}

function summary() {
  console.log(`${this.title} was written by ${this.author}.`) //* Since summary and book have no connection because a function doesn't have a bound 'this' to it automatically 'this' invoking 'this' will only print undefined (or gatsby utterly crashes) as it's looking for those properties on the global object, aka window
}

summary.call(book);  //*call requires the arguments to be passed in one-by-one
//or 
summary.apply(book); //*apply takes the arguments as an array
//!                    bear in mind that when there's an "()" outside of a contained function, class or variable then it fires. In this case it fires as an output to the console.log because the function spacifically states to console.log a string 

function printThis() {
  console.log(this)      //* comfirming what 'this' is 
}
printThis.call(book)  

function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  )
} 

longerSummary.call(book, 'dystopian', 1932);  //* With call each additional value you want to pass is sent as an additional argument.
longerSummary.apply(book, ['dystopian', 1932]);  //* For apply, you have to pass all the arguments in an array.

//*===========Bind
//*Sometimes, you might need to use a method over and over with the this context of another object, and in that case you could use the bind method to create a brand new function with an explicitly bound this.
const boundBraveNewWorldSummary = summary.bind(book);
boundBraveNewWorldSummary()

//*===========Arrow Functions
const button = document.createElement('button')
button.textContent = 'example of "this" refering something from the class because of having an arror function in the EventListener '
document.body.append(button)

class Display {
  constructor() {
    this.buttonText = 'New text'

    button.addEventListener('click', event => {                   //"This tactic is often used on class methods in frameworks like React." 
      event.target.textContent = this.buttonText
    })
  }
}

new Display()

//!**?=========== 


//!**?=========== 

// return(                                                                    //* I guess I just must have this
//   <div>
//     <button onClick={changeText}>{textForButton}</button> {/*//*this is an inline event in gatsby. it looks like this in plain html: onclick="changeText()" */} 
//     <p>Try to change me.</p>
//   </div>
  
// )
// }
  
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id,anotherId])

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "JD",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack and Heap memory in javascript

let myName = "Jaydeep"
let anotherName = myName
anotherName = "JD"
console.log(myName);
console.log(anotherName);


let userOne = {
    email : "jd@gmail.com",
    age : 20,
}

let userTwo = userOne

userTwo.email = "jaydeep@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



/*Primitive dataType goes in stack memory; And it provides copy of that element.
So when we change something (through assigned variable) it gets changed in copy of element  not in original.


Opposite of this. Non primitive dataType get stored in HEAP memory. 
And it gives reference value to assigned elements. 
So when assigned variable makes changes it changes the both values(original and assigned one. */


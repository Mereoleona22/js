// primitive data types 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreno = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);


// reference type (non primitive)

// Array, Objects, Functions

const names = ['a', 'b', 'c', 'd', 'e']; // arrays

let myObj = {
    name: 'John',
    age: 30,
}                                    // Object

const myFunction=function(){
    console.log('Hello');
}                                   // function



 
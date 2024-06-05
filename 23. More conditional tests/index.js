"use strict";
//Test for equality with strings
console.log("Test for equality:");
console.log("Corolla" == "Corolla"); //I predict true
//Test using the lower case function
console.log("Testing lower case function:");
console.log("Corolla".toLowerCase() == "corolla"); //I predict true
//Test using the upper case function
console.log("Testing upper case function:");
console.log("Corolla".toUpperCase() == "corolla"); //I predict false
//Numerical tests
console.log("Numerical tests");
console.log(5 < 8); //I predict true
console.log(15 > 100); //I predict false
console.log(65 < 50); //I predict false
//Test using "and" and "or" operators
console.log("Using && operator:");
console.log(10 > 5 && 100 < 10); //I predict false
console.log("Using || operator:");
console.log(50 < 10 || 33 > 22); //I predict true
//Test whether an item is in a array or not
let cars = ["Corolla", "Alto", "Cultus"];
console.log("Is 'Charade' in cars?");
console.log(cars.includes("Charade")); //I predict false
console.log("Is 'Cultus' in cars?");
console.log(cars.includes("Cultus")); //I predict true

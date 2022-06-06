/* Insert your current your age, the current number should be changed (option #1) 
//const myAge = (replace this and enter your age)*/

//Insert your age and if its not a whole number it will round to the nearst interger (option #1)
const myAge = Math.round(Math.random()*10);

// This vawriable is for eearly years
let earlyYears = 2; 

// Multiply early years by 10.5
earlyYears *= 10.5;

/* This is a check step to make sure that the math equation worked
console.log(earlyYears); */

let laterYears = myAge - 2;

/* This is a check step to make sure that the math equatoin worked 
console.log(laterYears); */

// This equation accounts for the number of dog years
laterYears *= 4;

/* This is a check step to make sure that the math works 
console.log(laterYears); */

/* This is a check step to verify that the equations are working correctly
console.log(earlyYears); 
console.log(laterYears); */

// This formula adds earlyYears and laterYears togehter
let myAgeInDogYears = earlyYears += laterYears;

/* This formula checks to make sure that the math is working correclty
console.log(myAgeInDogYears) */

// This converts your name to lowercase
let myName = 'InsertName'.toLowerCase();

// The name uses the name variable, the human age uses the myAge variable, and the dog age uses the myAgeInDogYears variable.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

/* This convert any human age to dog years 
let dogToHuman = myAge * 10;
console.log(dogToHuman); */

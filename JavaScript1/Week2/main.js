// 1. List of console.log statements saying "Hello World!" for each language that I know.

console.log("Ciao, mondo!"); // Italian
console.log("Hello, world!"); // English
console.log("Bounjour, le monde!"); // French
console.log("¡Hola, mundo!"); // Spanish
console.log("Hej, världen!"); // Swedish

// 2. Solution to the SyntaxError within:   console.log('I'm awesome');

console.log('I\'m awesome');
//or
console.log("I'm awesome"); 

// 3. Declare a variable x and initialize it with an integer.

let x;
console.log("The value of my variable x will be: undefined");
console.log(x);

x = 22;
console.log("The value of my variable x will be: 22");
console.log(x);

// 4. Declare a variable y and assign a string to it.

let y = "orange cat";
console.log("The value of my string will be: 'orange cat'");
console.log(y);

x = "black cat";
console.log("The value of my string will be:'black cat'");
console.log(x);

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

let z = 7.25;
console.log(z);

let a = Math.round(z);
console.log(a);

let highestValue = Math.max(z, a);
console.log(highestValue);

// 6. Arrays

let strayCats = [];
console.log("The value of my array will be: an empty array []");
console.log(strayCats);

let myFavouriteAnimals = ["cat", "bunny", "elephant"];
console.log(myFavouriteAnimals);
myFavouriteAnimals.push("baby pig"); // or myFavouriteAnimals.unshift('baby pig');
console.log(myFavouriteAnimals);

// 7. More strings

let myString = "this is a test"
console.log(myString);
console.log(myString.length);

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

let healthy = true;
let hairColor = "brown";
let eyeColor = "blue";
let bodyHeight = 1.57;
let bodyWeight = 49;

console.log("The value of my variable healthy is: " + healthy);
console.log("The value of my variable hairColor is: " + hairColor);
console.log("The value of my variable eyeColor is: " + eyeColor);
console.log("The value of my variable bodyHeight is: " + bodyHeight);
console.log("The value of my variable bodyWeight is: " + bodyWeight);

console.log("I think the type of my variable healthy is: boolean");
console.log("I think the type of my variable hairColor is: string");
console.log("I think the type of my variable eyeColor is: string");
console.log("I think the type of my variable bodyHeight is: number (float)");
console.log("I think the type of my variable bodyWeight is: number (integer)");

console.log(typeof(healthy));
console.log(typeof(hairColor));
console.log(typeof(eyeColor));
console.log(typeof(bodyHeight));
console.log(typeof(bodyWeight));

if(typeof(healthy) === typeof(hairColor)) {
  console.log("SAME TYPE")
} else {
  console.log("DIFFERENT TYPE")
}

if(typeof(hairColor) === typeof(eyeColor)) {
  console.log("SAME TYPE")
} else {
  console.log("DIFFERENT TYPE")
}

if(typeof(eyeColor) === typeof(bodyHeight)) {
  console.log("SAME TYPE")
} else {
  console.log("DIFFERENT TYPE")
}

if(typeof(bodyHeight) === typeof(bodyWeight)) {
  console.log("SAME TYPE")
} else {
  console.log("DIFFERENT TYPE")
}

if(typeof(healthy) === typeof(eyeColor) || typeof(healthy) === typeof(bodyWeight)) {
  console.log("SAME TYPE")
} else {
  console.log("DIFFERENT TYPE")
}

// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?; Show that you understand what % does.

x = 7;
x = x % 3;
console.log(x);
console.log("% is a remainder operator and it is used to specify the left-over amount which is result of a division");

let remainderFirst = 1995;
remainderFirst = remainderFirst % 4;
console.log(remainderFirst);
console.log("the remainder of 1995 / 4 is 3");

let remainderSecond = 165 % 64;
console.log(remainderSecond);
console.log("the remainder of 165 / 64 is 37");

let remainderThird = 89;
console.log(remainderThird % 3);
console.log("the remainder of 89 / 3 is 2");

let remainderFourth = 44;
let remainderFourthOtherValue = 43;
console.log(remainderFourth % remainderFourthOtherValue);
console.log("the remainder of 44 / 43 is 1");

// 10. Write a program to answer the following questions: can you store multiple types in an array? Numbers and strings? Can you compare infinities? 

let variousElements = [true, "brown", 22, "a cup of tea"];
console.log(variousElements);

let infinityOne = 6 / 0;
let infinityTwo = 10 / 0;
console.log(infinityOne);
console.log(infinityTwo);

if (infinityOne === infinityTwo) {
  console.log("Infinities can be compared.")
} else {
  console.log("Infinites cannot be compared.")
}

console.log("As the statements returns true, two infinities can be compared.")

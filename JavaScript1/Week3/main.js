// 1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);

myString = myString.split(",").join(" "); // or myString = myString.replaceAll(",", " ");
console.log(myString);

// 2. Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle") // or favoriteAnimals.unshift("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("I think the new value of my array favoriteAnimals is ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']")
console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

// To find the index of an item in an array you can use "indexOf("item")" as suggested below:
favoriteAnimals.indexOf("meerkat")
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));

// MORE JAVASCRIPT!

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function sumOfThree(firstArg, secondArg, thirdArg) {
  return firstArg + secondArg + thirdArg;
}

sumOfThree(2, 5, 3);
sumOfThree(12, 56, 32);

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
  return `a ${color} car`;
}

colorCar("blue");
colorCar("pink")

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

const danaObject = {
  firstName: "Dana Xenia",
  lastName: "Marasca",
  italian: true,
  birthYear: 1995,
}

function printObjectProperties(object) {
    for (property in object) {
      console.log(property + ": " + object[property])
    }
}

printObjectProperties(danaObject);

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)


function vehicleType(color, type) {
  if (type === 1) {
    return `a ${color} car`
  } else if (type === 2) {
    return `a ${color} motorbike`
  }
}

vehicleType("red", 1);
vehicleType("blue", 2);

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}

console.log(3 === 3 ? "yes" : "no");


// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let someVehicles = ["motorbike", "caravan", "bike", "airplane", "scooter"];
console.log(someVehicles);
// 8. How do you get the third element from that list?
console.log(someVehicles[2]); 

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'.
// and
// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle(color, code, age) {
  code = someVehicles[code - 1];
  if (age <= 1) {
    age = "new";
  } else if (age > 1) {
    age = "used";
  }
  return `a ${color} ${age} ${code}`
}

vehicle("blue", 1, 5);
vehicle("red", 2, 5);
vehicle("green", 3, 1)

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

let advertisement = "Amazing Joe's Garage, we service ";

for (let i = 0; i < someVehicles.length; i++) {
  advertisement += someVehicles[i];

 if (i === someVehicles.length - 2) {
      advertisement += "s, and ";
  } else if (i !== someVehicles.length - 1) {
      advertisement += "s, ";
  } else if (i === someVehicles.length - 1) {
      advertisement += "s.";
  }
}
  
console.log(advertisement);

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

console.log("If we wanted to add one more vehicle to the list, we would need to change the code for the question 10 by adding one more element to the array first, and then logging the advertisement we obtained through the for loop")

// 12. Create an empty object.

let emptyObject = {};
console.log(emptyObject);

// 13. Create an object that contains the teachers that you have had so far for the different modules.
// 14. Add a property to the object you just created that contains the languages that they have taught you.

let myTeachers = {
  firstModuleTeacher: "Tommy",
  secondModuleTeacher: "Sahin",
  languages: "HTML, CSS, JavaScript"
};

// 15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

console.log("I think that x == y will return: true")
console.log(x == y) // false
console.log("I think that x === y will return: true")
console.log(x === y) // false
console.log("I think that z == y will return: true")
console.log(z == y) // true
console.log("I think that z == x will return: false")
console.log(z == x) // false

// However, note that results are different when using JSON.stringify(array) to test primitive values within the array.

console.log(JSON.stringify(x) === JSON.stringify(y)); // true
console.log(JSON.stringify(x) == JSON.stringify(y)); // true

// 16. Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not). Does the order that you assign (o3 = o2 or o2 = o3) matter?

o2 = { foo: "restaurant"};
o1 = { foo: "cafe" }
console.log(o2);
console.log(o3);
console.log("Changing o2 does not change o3, because the computer reads the code from top to bottom. Changing o1 has no effect on o3. The order that you assign a object does not matter.")

// 17. What does the following code return? (And why?)

let bar = 42;
// EXTRA STEP: if we use typeof for the variable bar it will return a number:
console.log(typeof bar); // "number"
// THEN: type of "typeof bar" is a string, as "number" in itself can be considered a string. Essentially, we are applying typeof to the result of "typeof bar":
console.log(typeof typeof bar); // "string"


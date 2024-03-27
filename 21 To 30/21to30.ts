//---======== 21 ========---://
//think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
let info = {
  Name: "Alishbah",
  Age: 19,
}; // this object contains name and age

console.log(`I'm ${info.Name} and I'm ${info.Age} years old!`); // this will print the statement



//---======== 22 ========---://
//Intentional Error: If you haven’t received an array index error 
//in one of your programs yet, try to make one happen. Change an 
//index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.//
let a: string[] = [
  "Alishbah", 
  "Noor-ul-ain"
]; // this array contains 2 elements

console.log("Intentional Error:", a[2]); // the index no of array starts from zero so 2 is out of limit 
console.log("Correction:", a[1]); // this access the valid index



//---======== 23 ========---://
//Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction 
//for the results of each test. Your code should look something like this://
let day: string = "Thursday"; // this contain the name of the day

// 1
console.log("Is day == 'Thursday'? I predict True!");
console.log(day == "Thursday"); // True 

//2
console.log("Is day == 'Sunday'? I predict False!");
console.log(day == "Sunday"); // False

//3
console.log("If day !== 'Monday' I predict True!");
console.log(day !== "Monday"); // True

//4
console.log("If day !== 'Thursday' I predict False!");
console.log(day !== "Thursday"); // False

//5
console.log("If day !== '' I predict True!");
console.log(day !== ""); // True

//6
console.log("If day == '' I predict Flase!");
console.log(day == ""); // False

//7
console.log("If day !== 'thursday' I predict True!");
console.log(day !== "thursday"); // True

//8
console.log("If day == 'thursday' I predict False!");
console.log(day == "thursday"); // False

//9
console.log("If day.length == 8 I predict True!");
console.log(day.length == 8); // True

//10
console.log("If day.length == 2 I predict false!");
console.log(day.length == 2); // False



//---======== 24 ========---://
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one 
//False result for each of the following://

//Step 1: Tests for equality and inequality with strings//
console.log("Equality:", day == "Thursday"); // True
console.log("Inequality:", day !== "Thursday"); // False

//Step 2: Tests using the lower case function//
console.log("Inequal to lower case:", day !== "Thursday".toLowerCase()); // True
console.log("Equal to lower case:", day == "Thursday".toLowerCase()); //False

//Step 3: Numerical tests involving equality and inequality, greater than and 
//less than, greater than or equal to, and less than or equal to//
console.log("Numerical Tests:");

//equality and inequality:
console.log("Equality:", day == "Thursday"); // True
console.log("Inequality:", day !== "Thursday"); // False

//greater than and less than
console.log("Less Than:", day.length < 10); // True
console.log("Greater Than:", day.length > 14); // False

//greater than or equal to and less than or equal to
console.log("Greater Than Or Equal To:", day.length >= 8); // True
console.log("Less Than Or Equal To:", day.length <= 6) // False


//Step 4: Tests using "and" and "or" operators//
console.log("And Operator (True One):", day == "Thursday" && day.length > 2); // True
console.log("And Operator (False One):", day !== "Thursday" && day.length > 2); // False
console.log("Or Operator (True One):", day.length < 9 || day == "Thursday"); // True
console.log("Or Operator (False One):", day.length < 7 || day == "thursday"); //False

//Step 5: Test whether an item is in a array//
let numbers: number[] = [10, 13, 19];
console.log("Item in an array (True One):", numbers.includes(19)); // True
console.log("Item in an array (False One):", numbers.includes(11)); // False

//Step 6: Test whether an item is not in a array//
console.log("Item not in an array (True One):", !numbers.includes(11)); // True
console.log("Item not in an array (False One):", !numbers.includes(19)); // False



//---======== 25 ========---://
//Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 
//'green', 'yellow', or 'red'.
let alien_color: string = "green"; // this contain alien's color

//Step 1: Write an if statement to test whether the alien’s 
//color is green. If it is, print a message that the player 
//just earned 5 points.
if (alien_color == "green") {
  console.log("Congrats You Just Earned 5 Points!"); // this will print the statement if the alien color is green
};

//Step 2: Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)//
alien_color = "yellow";
if (alien_color == "green") {
  console.log("Congrats You Just Earned 5 Points!"); // this statement will be printed of the alien's color 
                                                     // is green which is not so the output will empty
};



//---======== 26 ========---://
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.//
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.

alien_color = "green";

// version that will run if block
if (alien_color == "green") {
  console.log("Congrat! Just Earned 5 Points For Shooting The Alien.");
} else {
  console.log("Congrats! You Just Earn 10 Points.");
};

// version that will run else block
if (alien_color !== "green") {
  console.log("Congrat! Just Earned 5 Points For Shooting The Alien.");
} else {
  console.log("Congrats! You Just Earned 10 Points.");
};



//---======== 27 ========---://
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.//
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.

// first version
if (alien_color == "green") {
  console.log("Congrats! Just Earned 5 Points.");
} else if (alien_color == "yellow") {
  console.log("Congrats! Just Earned 10 Points.");
} else {
  console.log("Congrats! Just Earned 15 Points.");
};

// second version
alien_color = "yellow";

if (alien_color == "green") {
  console.log("Congrats! Just Earned 5 Points.");
} else if (alien_color == "yellow") {
  console.log("Congrats! Just Earned 10 Points.");
} else {
  console.log("Congrats! Just Earned 15 Points.");
};

// third version
alien_color = "red";

if (alien_color == "green") {
  console.log("Congrats! Just Earned 5 Points.");
} else if (alien_color == "yellow") {
  console.log("Congrat! Just Earned 10 Points.");
} else {
  console.log("Congrats! Just Earned 15 Points.");
};



//---======== 28 ========---://
//Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a message that the person is an elder.

let age: number = 19;

if (age < 2) {
  console.log("The person is a baby"); // if the person's age is less than 2, this statement will be printed
} 
else if (age < 4) {
  console.log("The person is a toddler"); // if the person's age is less than 4, this statement will be printed
} 
else if (age < 13) {
  console.log("The person is a kid"); // if the person's age is less than 13, this statement will be printed
} 
else if (age < 20) {
  console.log("The person is a teenager"); // if the person's age is less than 20, this statement will be printed
} 
else if (age < 65) {
  console.log("The person is an adult"); // if the person's age is less than 60, this statement will be printed
} 
else {
  console.log("The person is an adult"); // otherwise this statement will be printed
};



//---======== 29 ========---://
//Favorite Fruit: Make a array of your favorite fruits, and then 
//write a series of independent if statements that check for 
//certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind 
//of fruit is in your array. If the fruit is in your array, the if block 
//should print a statement, such as You really like bananas!

let favorite_fruits: string[] = [
    "Strawberries",
    "Pomegranate",
    "Watermelon"
];

if(favorite_fruits.includes("Strawberries")){
    console.log("I really like Strawberries!") // if the array contains strawberries, this statement will be printed
};
if(favorite_fruits.includes("Pomegranate")){
    console.log("I really like Pomegranate!") // if the array contains pomegranate, this statement will be printed
};
if(favorite_fruits.includes("Watermelon")){
    console.log("I really like Watermelon!") // if the array contains watermelon, this statement will be printed
};
if(favorite_fruits.includes("Grewia Asiatica")){
    console.log("I really like Grewia Asiatica!") // if the array contains grewia asiatica, this statement will be printed
}
if(favorite_fruits.includes("Oranges")){
    console.log("I really like Oranges!") // if the array contains oranges, this statement will be printed
};



//---======== 30 ========---://
//Hello Admin: Make a array of five or more usernames, including the 
//name 'admin'. Imagine you are writing code that will print a greeting 
//to each user after they log in to a website. Loop through the array, 
//and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames: string[] = [
    "Admin", 
    "Alishbah", 
    "Shazia", 
    "Rabiya", 
    "Nimra"
]; // this contains the list of usernames

usernames.forEach(function(username) {
    if (username == "Admin") {
        console.log("Hello Admin, would you like to see a status report?"); // if usernames contain "Admin" then this statement will be printed 
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`); // and this statement will be printed to the remaining usernames
    }
});
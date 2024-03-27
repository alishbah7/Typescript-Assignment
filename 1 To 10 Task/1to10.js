//---======== 2 ========---://
//Personal Message: Store a person’s name in a letiable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let Name = "Alishbah"; // the name is stored this variable
console.log(`Hello ${Name}, would you like to learn some Python today?`);
//---======== 3 ========---://
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "alishbah muhammad kamran"; // the name is stored this variable
//Upper Case//
console.log(personName.toUpperCase()); // this will print the name in upper case
//Lower Case//
console.log(personName.toLowerCase()); // this will print the name in lower case
//Title Case//
// let name = personName.split(" ") // this split will split the name in to an array
// let titleCase: string = " " // declared this string variable to use to it in upcoming steps
// for(let i = 0; i < name.length; i++){ 
//     titleCase += name[i].charAt(0).toUpperCase() + name[i].slice(1).toLowerCase() + " " // using charAt to make first letter capital 
// and slice to make remaining letters small
// and adding titleCase variable to make 
// the output 
// }
// console.log(titleCase)
//---======== 4 ========---://
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.//
console.log("Debbie Oppermann once said, “Paint the sky make it yours”"); // this will print the statement
//---======== 5 ========---://
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a letiable 
//called famous_person. Then compose your message and store it in a new letiable called message. 
//Print your message.
let famous_person = "Debbie Oppermann"; // this varibale contains author name
let message = "“Paint the sky make it yours”"; // this variable contains the message
console.log(`${famous_person} once said, ${message}`); // this will print the message
//---======== 6 ========---://
//Stripping Names: Store a person’s name, and include some whitespace characters at the 
//beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
//at least once. Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.//
// let whitespace = "\t Alishbah \n" // \t is used to add horizontal tab and \n is used to add new line
// console.log("With whitespace:", whitespace);
// let withoutWhitespace = whitespace.trim() // trim method will remove the spaces
// console.log("Without whitespace:", withoutWhitespace);
//---======== 7 ========---://\
//Number Eight: Write addition, subtraction, multiplication, and division operations 
//that each result in the number 8. Be sure to enclose your operations in print 
//statements to see the results.
//Addition :
let addition = 6 + 2;
console.log(addition);
//Subtraction:
let subtraction = 10 - 2;
console.log(subtraction);
//Multiplication:
let multiplication = 4 * 2;
console.log(multiplication);
//Division:
let division = 80 / 10;
console.log(division);
//---======== 8 ========---://
//You should create four lines
console.log("-".repeat(40)); // the repeat method will repeat the value 
console.log(4 + 4);
console.log("-".repeat(40));
console.log(10 - 2);
console.log("-".repeat(40));
console.log(4 * 2);
console.log("-".repeat(40));
//---======== 9 ========---://
//Favorite Number: Store your favorite number in a variable. 
//Then, using that variable, create a message that reveals your 
//favorite number. Print that message.
let favouriteNumber = 3; // this variable contains number
let numberMessage = `My favourite number is ${favouriteNumber}`; // this variable contains statement
console.log(numberMessage); // this print the statement
export {};
//---======== 10 ========---://
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.//
//I have added comments in 3 (Title Case) and 6 task//

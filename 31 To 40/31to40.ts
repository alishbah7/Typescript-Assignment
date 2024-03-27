//---======== 31 ========---://
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.

 let usernames: string[] = [] // this array is empty

 if(usernames.length == 0){
    console.log("We need to find some users!") // this will print the message that "we need to find some users" if the list is empty 
 }
 else{
    console.log("Greetings") // otherwise it will print this one
 };



//---======== 32 ========---://
//Checking Usernames: Do the following to create a program that simulates how websites 
//ensure that everyone has a unique username.

//Step 1:
//Make a list of five or more usernames called current_users.
 let current_users: string[] = [
    "Alishbah",
    "Shazia",
    "Yasmeen",
    "Rabiya",
    "Nimra"
 ]; // this array has current users list


//Step 2:
//Make another list of five usernames called new_users. Make sure one or two of the new 
//usernames are also in the current_users list.

let new_users: string[] = [
    "Arshiya",
    "Tatheer",
    "Alishbah",
    "Yasmeen"
]; // this array has new users list


//Step 3:
//Loop through the new_users list to see if each new username has already been used. 
//If it has, print a message that the person will need to enter a new username. 
//If a username has not been used, print a message saying that the username is available.

new_users.forEach(function(newUser){
    if(current_users.some(current_users => current_users == newUser)){
        console.log(`${newUser} will need to enter a new user name`) // this will print a message to already existing users
    }
else{
    console.log(`${newUser} is avalaible`) // this will print a message to new users
}});



//---======== 33 ========---://
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
//Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.
//Loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. 

let numbers: number[] =[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
]; // this array has list of numbers from 1 to 9

numbers.forEach(function(num){
    let suffix = "th";
    if(num === 1){
        suffix = "st"; // this will add "st" at the end of 1
    }
    else if(num === 2){
        suffix = "nd"; // this will add "nd" at the end of 2 
    }
    else if(num === 3){
        suffix = "rd"; // this will add "rd" at the end of 3
    }
    console.log(`${num}${suffix}`)
});



//---======== 34 ========---://
//Pizzas: Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!

let pizzas: string[] = [
    "Fajita",
    "Margherita",
    "Supreme"
]; // this array contains list of pizzas' flavor

for(let a = 0; a < pizzas.length; a++){
    console.log(pizzas[a]) // this print names of the pizzas one by one
};

for(let a = 0; a < pizzas.length; a++){
    console.log(`I really like ${pizzas[a]} pizza!`) // this will print the statements one by one
};

console.log("Pizza is one of my favourite junk food.\nI like pizzas with extra cheese on top of them.\nFajita is one of my favourite flavour,")
// this will print additional lines



//---======== 35 ========---://
//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = [
    "Bunny",
    "Puppy",
    "Kitten"
]; // this array contains list of animals

for(let b = 0; b < animals.length; b++){
    console.log(animals[b]) // this will print animals names one by one
}; 

for(let b = 0; b < animals.length; b++){
    console.log(`${animals[b]} will make a great pet`) // this will print the statements one by one
}; 

console.log("These animals have alot of things in common like they are always loyal to their owner.\nThree of them are also very cute and loving!")
// this will print additional lines



//---======== 36 ========---://
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string = "Large", message: string = "I Love Typescript"){ //this function has parameters and its arguments passed in it
    console.log(`The size of a shirt is "${size}" with a message "${message}" printed on it`) //this will print the statement
};

make_shirt(); // this will print the defaul statement




//---======== 37 ========---://
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

make_shirt("Medium"); // this will print the statement with medium size
make_shirt("Extra Large", "Paint The Sky, Make It Yours!"); // there are different arguments passed in this one so 
                                                            // this will print the statement with new values



//---======== 38 ========---://
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`) // this will print the statements 
};

describe_city("Karachi"); // this will be default statement
describe_city("Tokyo", "Japan"); // the values of the parameters will in this one
describe_city("Seoul", "South Korea"); // the values of the parameters will in this one



//---======== 39 ========---://
//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this: "Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string){
    return `"${city}, ${country}"`; // this is will return the value in string
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Seoul", "South Korea"));



//---======== 40 ========---://
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the 
//album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string, title: string, tracks?: number) {
    if (tracks == undefined) {
        return `Artist: "${artist}", Album: "${title}"`// if the tracks value is no defined it will print this statement
    }else{
        return `Artist: "${artist}", Album: "${title}", Tracks: "${tracks}"` // if the tracks value is defined then it will print this statement
    }
};
console.log(make_album("Taylor Swift", "1989"));
console.log(make_album("Little Mix", "Glory Days"));
console.log(make_album("Jungkook", "Golden", 11));
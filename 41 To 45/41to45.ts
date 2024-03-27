//---======== 41 ========---://
//Magicians: Make a array of magician’s names.
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let Magicians: string[] = [
    "magician 1",
    "magician 2",
    "magician 3"
]; // contains list of magicians

function show_magicians(Magicians: string[]){
    Magicians.forEach(magician => { // this (forEach) loop will print name of magicians one by one
        console.log(magician)
    })
};
show_magicians(Magicians);



//---======== 42 ========---://
//Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase 
//the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.

function make_great(Magicians: string[]){
    Magicians.forEach(magicicans => {
        console.log(`The Great ${magicicans}`)
    }) 
};

make_great(Magicians); // modified list
show_magicians(Magicians); // original list



//---======== 43 ========---://
//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with 
//a copy of the array of magicians’ names. Because the original array will be unchanged, return 
//the new array and store it in a separate array. Call show_magicians() with each array to show 
//that you have one array of the original names and one array with the Great added to each magician’s name.


function newArray(Magicians: string[]): string[] {
    let greatMagicians: string[] = []; // new array
    Magicians.forEach(magicians => {
        greatMagicians.push(`The Great ${magicians}`); // pushing magicians names in a new array
    });
    return greatMagicians;
}

let greatMagicians = newArray(Magicians); // Creates a new modified array 

console.log("Original magicians:");
show_magicians(Magicians); // original list with show_magician function

console.log("Great magicians:");
show_magicians(greatMagicians); // modified list with show_magician function



//---======== 44 ========---://
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call 
//provides, and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.

function sandwiches(...items: string[]){ // using rest parameter for accepting infinite no of arguments
    console.log(`Making sandwhich with ${items.join(" ")}`) // using join method to concat all elements 
                                                          //in the array separated with space between them
};

sandwiches("Lettuce,", "Mayo", "And Cheese");
sandwiches("Chicken", "And Tomatoes");
sandwiches("Mustard sauce", "Chicken", "And Cheese");



//---======== 45 ========---://
//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value 
//pairs, such as a color or an optional feature. Print the Object that’s 
//returned to make sure all the information was stored correctly.

function cars(manufacturer: string, model: string, otherFeatures: Record<string, any>){ // the "record" will extend the string
    return {
        manufacturer,
        model,
        ...otherFeatures
    } // this will return the object
}

console.log(cars("Toyota", "Corolla", {Color: "Black", Year: 2020}));
console.log(cars("Ford", "Fiesta", {Color: "Blue", Sunroof: true}));
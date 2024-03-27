//---======== 11 ========---://
//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
let names = [
    "Alishbah",
    "Noor-ul-ain",
    "Maham",
    "Raveen"
]; // this array contains list of names
names.forEach(function (friends) {
    console.log(friends);
});
//---======== 12 ========---://
//Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each message 
//should be the same, but each message should be personalized with the person’s name.
names.forEach(function (msg) {
    console.log(`Hi, ${msg} how are you?`);
});
//---======== 13 ========---://
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
//and make a list that stores several examples. Use your list to print a series of statements 
//about these items, such as “I would like to own a Honda motorcycle.”
let transportation = [
    "Hyundai",
    "Honda",
    "Tesla",
    "BWM"
]; // this array contains list of cars company
transportation.forEach(function (examples) {
    console.log(`I would like to own a ${examples}'s car`);
});
//---======== 14 ========---://
//Guest List: If you could invite anyone, living or deceased, to dinner, who 
//would you invite? Make a list that includes at least three people you’d like 
//to invite to dinner. Then use your list to print a message to each person, 
//inviting them to dinner.
let guestList = [
    "Shazia",
    "Rabiya",
    "Nimra"
]; // this array contains list of guests
guestList.forEach(function (invitation) {
    console.log(`Dear ${invitation}, I would like to invite you for the dinner!`);
});
//---======== 15 ========---://
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you 
//need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Step 1: Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name 
//of the guest who can’t make it.
console.log(`${guestList[2]} can't make it to the dinner party!`); // this print the statement of the guest who is can't 
//make it to the dinner!
//Step 2: Modify your list, replacing the name of the guest who can’t 
//make it with the name of the new person you are inviting.//
guestList[2] = "Parveen"; // this replace the name with the person name who can't come!
//Step 3: Print a second set of invitation messages, one for each person who is still in your list.//
guestList.forEach(function (invitation) {
    console.log(`Dear ${invitation}, I would like to invite you for the dinner!`); // this will print the modified statements
});
//---======== 16 ========---://
//16: More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.//
//Step 1: Start with your program from Exercise 15. Add a print 
//statement to the end of your program informing people that you 
//found a bigger dinner table.
console.log("I would like to let you guys know that I have found a bigger dinner table!"); /// this will print the new statement about dinner! 
//Step 2: Add one new guest to the beginning of your array.//
guestList.unshift("Yasmeen"); // this unshift method will add the name at the beginning of the array
//Step 3: Add one new guest to the middle of your array. 
guestList.splice(2, 0, "Arshiya"); //this splice method will add the name at the middle of the array
//Step 4: add one new guest to the end of your list
guestList.push("Tatheer"); //this push method will add the name at the middle of the array
//Step 5: Print a new set of invitation messages, one for each person in your list.
guestList.forEach(function (invitation) {
    console.log(`Dear ${invitation} I would like to invite you for the dinner!`); // this will print the new set of invitations
});
//---======== 17 ========---://
//Shrinking Guest List: You just found out that your new dinner table won’t 
//arrive in time for the dinner, and you have space for only two guests.
//Step 1: Start with your program from Exercise 16. Add a new line that prints 
//a message saying that you can invite only two people for dinner.//
console.log("Sorry, but I can only invite 2 people for the dinner!"); // this will print the statement of only inviting 2 people
//Step 2: Remove guests from your list one at a time until only two 
//names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t 
//invite them to dinner.
while (guestList.length > 2) {
    let removedGuests = guestList.pop(); // pop method is used to remove elements from the array! this while loop 
    // and pop methods we are giving the intructions that except for the first 2 
    // people, print the statements to the other remaining people.
    console.log(`Sorry, ${removedGuests} I can't invite for the dinner`); // this will print the statement   
}
;
//Step 3: Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(function (invitation) {
    console.log(`Dear ${invitation} you are still invited for the dinner!`); // this will print the statements to those who are
    // still invited.
});
//Step 4: Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
guestList.splice(0, guestList.length); // this splice method will remove the remaining names from the array
console.log("Empty Guest List:" + guestList); // this will print the statements
//---======== 18 ========---://
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Step 1: Store the locations in a array. Make sure the array is not in alphabetical order.
let favCountries = [
    "Japan",
    "Turkey",
    "Thailand",
    "Italy",
    "South Korea"
]; // this array contain the list of countries 
//Step 2: Print your array in its original order.
console.log("Original Order:", favCountries);
//Step 3: Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...favCountries].sort()); // the sort method is used to print the array in alphabetical order
//Step 4: Show that your array is still in its original order by printing it.
console.log("Original Order:", favCountries); // this will print the original order
//Step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", [...favCountries].sort().reverse()); // first the sort method will sort the array in 
// alphabetical order then the reverse method will
// reverse it
//Step 6: Show that your array is still in its original order by printing it again.
console.log("Original Order:", favCountries); // this will print the array in original order
//Step 7: Reverse the order of your list. Print the array to show that its order has changed.
favCountries.reverse();
console.log("Reverse Order:", favCountries);
//Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
favCountries.reverse(); // this method will only reverse the original order
console.log("Reverse Order", favCountries); // this will print the array
//Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favCountries.sort(); // this will stored the reverse array in alphabetical order
console.log("Alphabetical Order", favCountries);
//Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favCountries.reverse(); // this will again reverse the array
console.log("Reverse Order", favCountries);
//---======== 19 ========---://
//Dinner Guests: Working with one of the programs from Exercises 14 through 17, 
//print a message indicating the number of people you are inviting to dinner.
console.log(`I am inviting ${guestList} people on the dinner!`); // this print a message about how many people I'm inviting to the dinner
//---======== 20 ========---://
//Think of something you could store in a array. 
//For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything 
//else you’d like. Write a program that creates a list containing these items.//
let countriesList = [
    "Thailand",
    "Turkey",
    "Japan"
]; // this array contain a list of countries that I would like to visit
console.log(`Countries I would like to visit:`, countriesList); // this will print the statement
export {};

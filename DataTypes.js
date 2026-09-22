// Use readlineSync.question() to prompt a user for input
// Prompt a user for an index number to find the character at that index
// Use bracket notation to access the character
// Print out the character
const readlineSync = require('readline-sync');
let userInput = readlineSync.question("Enter a string: ");
let indexNumber = readlineSync.question("Enter an index number: ");

console.log('The character at index ' + indexNumber + ' is: ' + userInput[indexNumber]);
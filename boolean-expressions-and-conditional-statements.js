/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
// Added: new inventory items
const hasSword = true;
const hasCompass = false;

console.log("You wake up in a dark forest.");
console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You enter the mountains with your torch.");

  // Added: new scenario where player encounters a wolf
  const enemyChoice = readline.question("A wild wolf blocks your path! Do you 'fight' or 'run'? ");

  // Added: nested conditionals using && and ! to handle wolf encounter
  if (enemyChoice === "fight" && hasSword) {
    console.log("You defeat the wolf with your sword and continue safely.");
  } else if (enemyChoice === "fight" && !hasSword) {
    console.log("You have no weapon. The wolf chases you back down the mountain.");
  } else if (enemyChoice === "run") {
    console.log("You run as fast as you can and escape safely.");
  } else {
    console.log("You freeze in fear and the wolf blocks your path forever.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It is too dark to proceed. You decide to turn back.");

} else if (choice === "village") {
  console.log("You head toward the village.");

  // Added: using || to check if player has map or compass
  if (hasMap || hasCompass) {
    console.log("You find your way easily and arrive safely.");
  } else {
    // Added: new scenario where player can ask a stranger for help
    const askHelp = readline.question("You are lost. Do you ask a stranger for help? ('yes' or 'no') ");

    if (askHelp === "yes") {
      console.log("A kind traveler shows you the way. You reach the village safely.");
    } else {
      console.log("You wander aimlessly and never find the village.");
    }
  }

} else {
  console.log("You get lost and wander aimlessly.");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
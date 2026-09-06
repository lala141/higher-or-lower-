const input = require("readline-sync");

// Taking first player info
let name1 = input.question("Enter first player name: ");
let num1 = Number(input.question("Enter your number: "));

// Taking second player info
let name2 = input.question("Enter second player name: ");
let num2 = Number(input.question("Enter your number: "));

while (true) {

    // Guessing logic
    let guess = Number(input.question("Player one, guess the number: "));

    if (guess === num2) {
        console.log("Player one is winner");
        break;
    }
    else if (guess < num2) {
        console.log("Hint: Higher");
    }
    else {
        console.log("Hint: Lower");
    }
}
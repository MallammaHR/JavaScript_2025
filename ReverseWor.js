// First, we need to use the readline module to get input from the user.
const readline = require('readline');

// Create an interface to read input and output (using the terminal or console)
const rl = readline.createInterface({
    input: process.stdin,   // Input comes from the terminal/console
    output: process.stdout  // Output goes to the terminal/console
});

// Ask the user to enter a string
rl.question("Enter a string: ", function(str) {
    // Reverse the string (we split it into characters, reverse, and join it back)
    let reversedString = str.split('').reverse().join('');
    
    // Print the reversed string
    console.log("Reversed string is: " + reversedString);
    
    // Close the input/output interface
    rl.close();
});
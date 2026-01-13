function repeatedCharacter(str) {
    let charCount = {};       // Object to store counts
    let repeatedChar = [];    // Array to store repeated characters

    // Count each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char] += 1;   // Increment count if it already exists
        } else {
            charCount[char] = 1;    // Initialize count if first time
        }
    }

    // Find characters that occurred more than once
    for (let char in charCount) {
        if (charCount[char] > 1) {
            repeatedChar.push(char);
        }
    }

    return repeatedChar;   // Return the array
}

// Test the function
let myString = "aaaaplaywrighthsdjfjsdfl";
let repeats = repeatedCharacter(myString);
console.log(repeats);

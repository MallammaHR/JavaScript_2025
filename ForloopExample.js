const fs = require('fs');
const { JSDOM } = require('jsdom');

// Create a new HTML document using JSDOM
const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>JavaScript Example</title>
        </head>
        <body>
            <h2>JavaScript For Loop Example</h2>
            <p id="demo"></p>  <!-- Placeholder for result -->
        </body>
    </html>
`);

// Now, we can interact with the simulated DOM
const document = dom.window.document;
let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is: " + i + "<br>";
}

// Set the innerHTML of the "demo" paragraph
document.getElementById("demo").innerHTML = text;

// Write the resulting HTML to a file
fs.writeFileSync('output.html', dom.serialize(), 'utf-8');

console.log("The output has been written to output.html");
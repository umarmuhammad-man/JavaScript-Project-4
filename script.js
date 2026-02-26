let originalText = "I love my country Pakistan";
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Quetta"];

const output = (html) => { document.getElementById("output").innerHTML = html; };
const input = () => { return document.getElementById("input").value; };
const clearInput = () => { document.getElementById("input").value = ""; };
const clearOutput = () => { document.getElementById("output").innerHTML = ""; };

function toastify(msg) {
    Toastify({ text: msg, duration: 3000, gravity: "top", position: "left",
        style: { background: "linear-gradient(to right, #000000, #c93d3d)" }
    }).showToast();
}

// Ch 21: Changing Case
function toLowerCase() {
    output(`<h1 style="color: green;">${originalText.toLowerCase()}</h1>`);
}

function toUpperCase() {
    output(`<h1 style="color: green;">${originalText.toUpperCase()}</h1>`);
}

// Ch 22: Measuring Length & Extracting Parts
function capitalize() {
    let text = input();
    if (!text) { toastify("Type text in the input box!"); return; }
    let cap = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    output(`<h1 style="color: green;">${cap}</h1>`);
}

// Ch 21-22: Complex Formatting
function betterFormatting() {
    let text = input();
    if (!text) { toastify("Type text to format."); return; }
    let words = text.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    output(`<h1 style="color: green;">${words.join(' ')}</h1>`);
}

// Ch 23-24: Finding Segments & Characters
function findWord() {
    let word = input();
    if (!word) { toastify("Enter a word to find."); return; }
    let index = originalText.toLowerCase().indexOf(word.toLowerCase());
    if (index !== -1) {
        output(`Found at <h1 style="color: green;">Index: ${index}</h1>`);
    } else {
        output(`<h1 style="color: red;">Not Found</h1>`);
    }
}

// Ch 25: Replacing Characters
function replaceWord() {
    let word = input();
    if (!word) { toastify("Enter a replacement word."); return; }
    let newText = originalText.replace(/Pakistan/g, word);
    output(`<h1 style="color: green;">${newText}</h1>`);
}

// Array Interactions
function printAllCities() {
    let list = cities.join(", ");
    output(`<p>${list}</p>`);
}

function addCity() {
    let city = input();
    if (!city) { toastify("Enter a city."); return; }
    cities.push(city);
    output(`<h1 style="color: green;">${city}</h1> added to list.`);
}

function checkCity() {
    let city = input().toLowerCase();
    if (cities.map(c => c.toLowerCase()).includes(city)) {
        output(`<h1 style="color: green;">Found!</h1>`);
    } else {
        output(`<h1 style="color: red;">Not Found</h1>`);
    }
}
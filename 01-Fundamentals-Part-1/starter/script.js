// Welcome to JavaScript Basics

// --------------------------------------------------
// Logging Output
// --------------------------------------------------
// Simple examples of logging
console.log("Welcome to JavaScript!");
console.log(3 + 5 + 7 + 9); // Example of logging a calculation

// Connecting JavaScript to HTML
// Add the following line to your HTML file to link this script:
// <script src="script.js"></script>

// --------------------------------------------------
// Values and Variables
// --------------------------------------------------

// Values are pieces of data
console.log("Anna"); // String
console.log(25); // Number

// Variables are used to store values
let firstName = "Anna"; // Use camelCase for variable names
console.log(firstName);

// Variable naming rules:
// 1. Must start with a letter, $, or _ (not a number)
// 2. Cannot use reserved keywords (e.g., `let`, `const`, `function`)
// 3. Use descriptive names for better readability

// Examples of invalid variable names:
// let 1stName = "Anna"; // ❌ Starts with a number
// let new = "JavaScript"; // ❌ Reserved keyword

// --------------------------------------------------
// Assignment One
// --------------------------------------------------
// Declare variables for country, continent, and population
let country = "England";
let continent = "Europe";
let population = 4; // Population in millions

// Log the values to the console
console.log(country);
console.log(continent);
console.log(population);

// --------------------------------------------------
// Primitive Data Types
// --------------------------------------------------
// JavaScript has 7 primitive data types:
let number = 23; // Number
let string = "Hello"; // String
let boolean = true; // Boolean
let undefinedValue; // Undefined
let nullValue = null; // Null (explicitly empty value)
let symbol = Symbol(); // Unique and immutable value
let bigInt = 123456789012345678901234567890n; // BigInt for large integers

// Check the data type using `typeof`
console.log(typeof boolean); // Outputs: "boolean"
console.log(typeof 34); // Outputs: "number"
console.log(typeof undefinedValue); // Outputs: "undefined"
console.log(typeof nullValue); // Outputs: "object" (quirk in JavaScript)

// --------------------------------------------------
// Working with Variables
// --------------------------------------------------
// Reassigning variables
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

javaScriptIsFun = false; // Reassigning to another boolean
console.log(javaScriptIsFun);

javaScriptIsFun = 22; // Changing to a different data type (number)
console.log(javaScriptIsFun);

// Undefined and null examples
let year; // Declared but no value assigned (undefined)
console.log(typeof year); // Outputs: "undefined"

console.log(typeof null); // Outputs: "object" (legacy bug in JavaScript)

// --------------------------------------------------
// let, const, and var
// --------------------------------------------------
// `let`: Block-scoped variable (preferred for variables that change)
let birthYear = 1999;
birthYear = 2000;

// `const`: Block-scoped variable that cannot be reassigned
const countryBornIn = "UK";
// countryBornIn = "USA"; // ❌ This will throw an error

// `var`: Function-scoped variable (avoid using it in modern JavaScript)
var myVar = "Old School";

// --------------------------------------------------
// Basic Operators
// --------------------------------------------------
// Arithmetic operators: +, -, *, /, ** (exponentiation), %
const currentYear = 2025;
const ageAnna = currentYear - 1999;
const ageHarry = currentYear - 2000;

console.log(ageAnna, ageHarry); // Log both ages
console.log(ageAnna * 2); // Multiply
console.log(ageAnna / 2); // Divide
console.log(ageAnna % 3); // Remainder (modulus)

// Concatenation
console.log("Anna is " + ageAnna + " years old");

// Shortcut assignments
let x = 10 + 5;
x += 5; // Equivalent to: x = x + 5
x -= 5; // Equivalent to: x = x - 5
x *= 5; // Equivalent to: x = x * 5
x /= 5; // Equivalent to: x = x / 5

// --------------------------------------------------
// Comparison Operators
// --------------------------------------------------
console.log(ageAnna > ageHarry); // true or false
console.log(ageAnna >= 44); // true or false
// Other operators: <, >, <=, >=

// --------------------------------------------------
// Logical Operators
// --------------------------------------------------
// Logical AND `&&`, OR `||`, NOT `!`
const isAdult = ageAnna > 18 && ageHarry > 18; // Both must be true
console.log(isAdult); // true

const eitherAdult = ageAnna > 18 || ageHarry > 18; // Either can be true
console.log(eitherAdult); // true

const notAdult = !isAdult; // Negation
console.log(notAdult); // false

// --------------------------------------------------
// Operator Precedence
// --------------------------------------------------
// Precedence determines the order of operations
const result = (3 + 5) * 2 ** 2;
console.log(result); // Outputs: 32

// --------------------------------------------------
// Truthy and Falsy Values
// --------------------------------------------------
// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(42)); // true

// Example: Using truthy and falsy values in conditions
const money = 0;
if (money) {
  console.log("You have money!");
} else {
  console.log("No money left!");
}

// --------------------------------------------------
// Equality Operators
// --------------------------------------------------
// `==` performs type coercion
console.log("18" == 18); // true (compares value, ignores type)

// `===` checks for strict equality (no type coercion)
console.log("18" === 18); // false (different types)

// --------------------------------------------------
// Template Literals
// --------------------------------------------------
// Use backticks (`) for template literals
console.log(`Anna is ${ageAnna} years old`); // Easier than concatenation

// --------------------------------------------------
// Type Conversion and Coercion
// --------------------------------------------------
// Convert strings to numbers
const inputYear = "1999";
console.log(Number(inputYear) + 25); // Converts "1999" to 1999 and adds 25

// Convert numbers to strings
const age = 25;
console.log(String(age)); // Converts 25 to "25"

// Type coercion (automatic conversion by JavaScript)
console.log("I am " + 25 + " years old"); // Number 25 is coerced into a string

// --------------------------------------------------
// Control Structures
// --------------------------------------------------
// Example: if/else
if (ageAnna >= 18) {
  console.log("Anna is an adult.");
} else {
  console.log("Anna is not an adult.");
}

// Example: switch
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("Regular day.");
}

// Example: for loop
for (let i = 1; i <= 5; i++) {
  console.log(`This is loop iteration ${i}`);
}

// --------------------------------------------------
// Functions
// --------------------------------------------------
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Anna"));

// --------------------------------------------------
// Arrow Functions
// --------------------------------------------------
const add = (a, b) => a + b;
console.log(add(5, 7)); // Outputs: 12

// --------------------------------------------------
// Challenge One
// --------------------------------------------------
const massMark = 78;
const heightMark = 1.69;

const massJohn = 95;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;

// --------------------------------------------------
// Challenge Two
// --------------------------------------------------
const massAnna = 78;
const heightAnna = 1.69;
const massHarry = 92;
const heightHarry = 1.95;

const BMIAnna = massAnna / (heightAnna * heightAnna);
const BMIHarry = massHarry / (heightHarry * heightHarry);
console.log(BMIAnna, BMIHarry);

if (BMIAnna > BMIHarry) {
  console.log(`Anna's BMI ${BMIAnna} is higher than Harry's ${BMIJohn}!`);
} else {
  console.log(`Harry's BMI ${BMIHarry} is higher than Anna's ${BMIAnna}!`);
}

let js = "amazing";
// This comes up on the webpage
// if (js === "amazing") alert("js is amazing");
// This comes up on the webpage console
console.log(3 + 5 + 7 + 9);

// To connect this to the HTML file i added the following to the html:
// <script src="script.js"></script>

// Values and Variables
//These are all values
console.log("Anna");
console.log("25");

// This is a vairbale
let first_name = "Anna";
console.log(first_name);

//Assignment One
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

let country = "England";
let continent = "Europe";
let population = 4;

console.log(country);
console.log(continent);
console.log(population);

//Primative data types
let number = 23;
let string = "hello";
let booleon = True; //or False
//undefined
let children;
null;
//Symbol= that cannot be changed e.g. PI
let PI = 3.14;
//BigInt = larger ineregars than the data type can hold

//typeof tells you what type of data type it is
console.log(typeof true); // this comes out us booleon
console.log(typeof 34); // this comes out as int

//Reassigning a vairable
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
javaScriptIsFun = false; //here i am reassigning , dont need to put let again. I changed it to a different booleon
console.log(javaScriptIsFun);
javaScriptIsFun = 22; //Here i changed it to a different data type from a booleon to a Int

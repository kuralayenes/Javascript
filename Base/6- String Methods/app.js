let value;

const firstName = "Louis";
const lastName = "Armstrong";


const langs = "Java,Python,C++";

value = firstName + lastName;
value = firstName + " " + lastName;
value = "Enes ";

value += "Kuralay";  // value = value + "Kuralay"
value = firstName.length;

value = firstName.concat(" ",lastName," ","Caz"); // firstName + " "


value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];
value = firstName[3];
value = firstName[firstName.length -1];  // we use it when we don't know the length

// Index of

value = firstName.indexOf("L")
value = firstName.indexOf("o")
value = firstName.indexOf("l")  // Returns -1 if there are no characters in it


// Char at 


value = firstName.charAt(0);
value = firstName.charAt(firstName.length-1)

// Split

value = langs.split(",")

// Replace

value = langs.replace("Python","Css")

// Includes

value = langs.includes("Java")

value = langs.includes("J123123a")

console.log(value);
console.log(typeof value);
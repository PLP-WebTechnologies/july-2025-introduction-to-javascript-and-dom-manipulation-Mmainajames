//PART 1: MASTER JAVASCRIPT BASICS
// Using variable Declarations and Data Types
let name = "James"; // String
let age = 25; // Number
let isStudent = true; // Boolean
console.log(name, age, isStudent);

//Using prompt to get user input
let color = prompt("What is your favorite color?");
document.getElementById("message").innerText = "Wow " + color + " is a beautiful color!"; //USE DOM MANIPULATION

//Using arithmetic and logical operators
let a = 10;
let b = 3;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Is a greater than b?", a > b);
console.log("Both positive?", a > 0 && b > 0);
console.log("Either is positive?", a > 0 || b > 0);
console.log("a is not equal to b?", a != b);

//Using conditional statements
let sex = prompt("Enter your gender (M/F):");

if (sex = "M") {
    console.log("You are MALE.");
} else {
    console.log("You are FEMALE.");
}

//PART 2: JAVASCRIPT FUNCTIONS

// Function to check if a number is even or odd
function isEven(number) {
    return number % 2 === 0;
}

function checkEven() {
    let num = document.getElementById("numInput").value;
    let result = isEven(num) ? "Even" : "Odd";
    document.getElementById("evenResult").innerText = "The number is " + result;
}

// Function to toggle visibility of content
function toggleContent() {
    let element = document.getElementById("content");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// PART 3: JAVASCRIPT LOOPS
let fruits = ["Mango", "Banana", "Orange", "Apple", "Pineapple"];
let list = document.getElementById("fruitList");
// Using for loop to display fruits
for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.innerText = fruits[i];
    list.appendChild(li);//DOM to insert the new list item into the <ul> on the web page
}

// Using forEach loop to log fruits with their index
fruits.forEach(function (fruit, index) {
    console.log(index + 1 + ". " + fruit);
});

//Using while loop to display the fruits in reverse order
let reverseList = document.getElementById("whileList");
let j = fruits.length - 1;
while (j >= 0) {
    let li = document.createElement("li");
    li.innerText = fruits[j];
    reverseList.appendChild(li);
    j--;
}
// Using do...while loop to display fruits
let k = 1;  // Initialize k here
let doWhileList = document.getElementById("doWhileList");
do {
    let li = document.createElement("li");
    li.innerText = fruits[k];
    doWhileList.appendChild(li);
    k++;
} while (k < fruits.length);




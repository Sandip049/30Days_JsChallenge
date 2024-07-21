// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = 'Sandip'
let age = 21
console.log(`The person's name is ${name} and age is ${age}`);
// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`first line string
    second line string`);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array = [1, 2, 3, 4, 5, 6, 7]
const [first, second] = array
console.log(first);
console.log(second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let Book = {
    title : "It Ends With Us",
    author : "Coleen hover",
    year : 2015
}
const {title, author} = Book
console.log(title);
console.log(author);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let newArray = [...array, 8,9]
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args){
    let total =0
    for (const iterator of args) {
        total += iterator
    }
    return total
}

console.log(sum(1,2,3,4));


// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(num1, num2 =1){
    return num1 * num2
}

console.log(product(15));
console.log(product(15, 2));

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let firstName = "Cherry"
let lastName = "Sherpa"
let favColor = "green"

let details = function(){
    console.log('Hello Guys');
}

let person = {firstName,lastName, favColor, details}
console.log(person);
person.details()

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const man = {
    [propName1]: "Sandip",
    [propName2]: "Neupane",
    [propName3]: 21
};

console.log(man);



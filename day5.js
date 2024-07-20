// Task 1: Write a function to check if a number is even or odd and log the result to the console.
const OddEven = (num) => {
    if (num % 2 ==0){
        console.log(`Number ${num} is even`);
    } else {
        console.log(`Number ${num} is odd`);
    }
}
OddEven(5);
OddEven(10);


// Task 2: Write a function to calculate the square of a number and return the result.
function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(10));

// Task 3: Write a function expression to find the maximum of two numbers and log the result.
const Max = (num1, num2) =>{
    if(num1 > num2){
        console.log(`Number ${num1} is greater than ${num2}`);
    } else {
        console.log(`Number ${num2} is greater than ${num1}`);
    }
}
Max(10, 15);
// Task 4: Write an arrow function to concatenate two strings and return the result.
const concat = (string1, string2) => {
    return string1 + string2;
}

console.log(concat('sandy', 'neupane'));

// Task 5: Write an arrow function to check if a string contains specific characters and return the boolean value.
const specificChar = (string, char) => {
    return string.includes(char)
}

console.log(specificChar('Sandy', 'S'));
console.log(specificChar('Sandy', 's'));

// Task 6: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 3));
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (a, b=4) =>{
    return  a* b;
}
console.log(product(2));
console.log(product(2, 3));

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.
const greeting = (name, age=21) => {
    console.log(`Hello ${name}, Good Morning. You're ${age} now!`);
}

greeting('Sandip')
greeting('Sandip', 20)

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function main (func, times) {
    for (let index = 1; index <= times ; index++) {
        func()
    }
}
function secondfunc (){
    console.log('Hi');
}
main(secondfunc, 3)


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function higherfunc (func1, func2, value) {
    console.log(func2(func1(value)));
}

function firstfunc (value){
    return value + 1;
}

function secondfunc (value){
    return value * 2;
}

higherfunc(firstfunc, secondfunc, 3)
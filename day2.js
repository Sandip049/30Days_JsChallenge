// Tasks/Activities:

// Activity 1: Arithmetic Operations
// * Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 50;
let num2 = 60;
console.log(num1 + num2);
// * Task 2: Write a program to subtract two numbers and log the result to the console.
let num3 = 50;
let num4 = 50;
console.log(num3 - num4);

// * Task 3: Write a program to multiply two numbers and log the result to the console.
let num5 = 50;
let num6 = 50;
console.log(num5 * num6);

// * Task 4: Write a program to divide two numbers and log the result to the console.
let num7 = 50;
let num8 = 50;
console.log(num7 / num8);

// * Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let num9 = 51;
let num10 = 50;
console.log(num9 % num10);

// Activity 2: Assignment Operators
// * Task 6: Use the += operator to add a number to a variable and log the result to the console.
let val = 10;
val += 1;
console.log(val);

// * Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let val1 = 10;
val1 -= 1;
console.log(val1);

// Activity 3: Comparison Operators
// * Task 8: Write a program to compare two numbers using > and < and log the result to the console.
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}

if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
} else {
    console.log(`${num1} is not less than ${num2}`);
}


// * Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
if (num1 >= num2) {
    console.log(`${num1} is greater than or equal to ${num2}`);
} else {
    console.log(`${num1} is not greater than or equal to ${num2}`);
}

if (num1 <= num2) {
    console.log(`${num1} is less than or equal to ${num2}`);
} else {
    console.log(`${num1} is not less than or equal to ${num2}`);
}

// * Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let first = 10
let second = '10'
if (first == second) {
    console.log(`${first} is equal to ${second} using ==`);
} else {
    console.log(`${first} is not equal to ${second} using ==`);
}

if (first === second) {
    console.log(`${first} is equal to ${second} using ===`);
} else {
    console.log(`${first} is not equal to ${second} using ===`);
}


// Activity 4: Logical Operators
// * Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let log1= 50
let log2= 60
let log3= 70
let log4= 80

if (log1 > log2 && log3 < log4){
    console.log("Condition true")
} else {
    console.log("Condition false");
}
// * Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (log1 > log2 || log3 < log4){
    console.log("Condition true")
} else {
    console.log("Condition false");
}

// * Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let isSunny = true;
if (!isSunny){
    console.log("The weather is not sunny outside");
} else {
    console.log("The weather is sunny outside");
}

// Activity 5: Ternary Operator
// * Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = 10;
let result =number >0 ? "Number is positive" : "Number is negative";
console.log(result);

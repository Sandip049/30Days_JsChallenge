// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let index = 0; index <= 10; index++) {
    console.log(`The numbers are ${index}`);
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let index = 1; index <= 10; index++) {
    console.log(`The multiplication table of  5 is 5 * ${index} =`,  5 * `${index}`);
}

// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i =1;
sum =0
while (i <=10) {
    sum += i
    i++;
}

console.log("The sum is ", sum);

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let index = 10;
while ( index >= 1 ) {
    console.log("The numbers from 10 to 1 are",index);
    index--;
}

// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let j =1;
do {
    console.log("The numbers from 1 to 5 are", j);
    j++;
} while (j <= 5);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let n =5;
let fact = 1;
let count = n;
do {
    fact *= count;
    count--;
} while (count > 0);
console.log(`The factorial of ${n} is`,fact);

// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:
// (ignore color)
for (let a = 0; a < 6; a++) {
    let pattern = "";
    for (let b = 0; b < a; b++) {
        pattern += "* "
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let c = 1; c <=10; c++) {
    if (c == 5){
        continue;
    }
    console.log("The numbers are",c);
}

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let c = 1; c <=10; c++) {
    if (c == 7){
        break;
    }
    console.log("The numbers are", c);
}
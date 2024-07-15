// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 10;

if (num > 0) {
    console.log(`The number ${num} is a positive number`);
} else if (num == 0) {
    console.log(`The number ${num} is equal to zero`);
} else {
    console.log(`The number ${num} is a negative number`);
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;

if (age >= 18) {
    console.log("Your age more than 18, so you can vote.");
} else {
    console.log("You can't vote.");
}


// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 30;
let num2 = 20;
let num3 = 20;

if (num1 > num2 ) {
    if(num1 > num3) {
        console.log(`The number ${num1} is the largest number`);
    }
    else if(num1 < num3){
        console.log(`The number ${num3} is the largest number`);
    }
} else if(num2 > num1 ) {
    if (num2 > num3) {
        console.log(`The number ${num2} is the largest number`);
    } else {
        console.log(`The number ${num3} is the largest number`);
    }
}


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day ;
switch (day = 3){
    case 1:
        console.log("It is sunday");
        break;
        case 2:
            console.log("It is is monday");
            break;
        case 3:
            console.log("it is tuesday");
            break;
            case 4:
                console.log("it is wednesday");
                break;
                case 5:
                    console.log("it is thursday");
                    break;
                    case 6:
                        console.log("it is friday");
                        break;
                        default:
                            console.log("it is saturday");
}

// Task 5: Write a program that uses a switch case to assign a grade (‘A’, ‘B’, ‘C’, ‘D’, ‘F’) based on a score and log the grade to the console.
let score = 30 ;
switch (true ){
    case score > 80:
        console.log("You grade is A");
        break;
        case score > 60:
            console.log("You grade is B");
            break;
        case score >40:
            console.log("You grade is C");
            break;
            case score >20:
                console.log("You grade is D");
                break;
                        default:
                            console.log("You grade is E");
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let val = 11;
let result = val % 2 == 0 ? "even" : "odd";
console.log(result);


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 1900;
if ( (year % 100 !== 0 && year % 400 === 0) || year % 4 === 0){
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
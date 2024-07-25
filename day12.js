// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
// function throwerror() {
//     throw new Error  ("Something went wrong !!")
// }
// try {
//     throwerror();
// } catch (error) {
//     console.log("Error: " + error);
// }


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
let result = 0;
function divideTwoNumbers(num1, num2){
    result = num1 / num2;
    if (num2 === 0) {
        throw new Error ("error")
    }
}
try {
    divideTwoNumbers(1, 0);
    // console.log(result);
} catch (error) {
    console.log("Error: denominator is zero" + error);
}



// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("Running try");
    hello;
    console.log('Namaste');
} catch (error) {
    console.log("Error:" + error);
} finally {
    console.log('Hi Guys');
}
// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function checkNumber(num) {
    if (num < 0) {
        throw new CustomError('The number cannot be negative');
    }
    return `The number is ${num}`;
}

try {
    const result = checkNumber(-5);
    console.log(result);
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Custom error caught: ${error.message}`);
    } else {
        console.error(`An unexpected error occurred: ${error.message}`);
    }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// Define the custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Function to validate user input
function validateInput(input) {
    if (input  === '') {
        throw new ValidationError('Input cannot be empty or whitespace');
    }
    return `Valid input: ${input}`;
}

// Using try-catch to handle the custom error
try {
    const userInput = ''; // Test with empty string
    const result = validateInput(userInput);
    console.log(result);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation error: ${error.message}`);
    } else {
        console.error(`Unexpected error: ${error.message}`);
    }
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > 0.5){
        resolve('Promise resolved successfully')
    } else {
        reject('Promise rejected');
    }
});

randomPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log('Error Caught: ' + error);
});

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const randomPromise1  = () => {
    return new Promise((resolve, reject) => {
        const randomVal = Math.random()
        if (randomVal > 0.5) {
            resolve("Resolved")
        } else {
            reject(new Error("Rejected"))
        }
    })
}

const handlePromise = async () => {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    }
}

handlePromise();


// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

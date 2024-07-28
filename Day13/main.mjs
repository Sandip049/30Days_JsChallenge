// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const sum = (num1, num2) =>{
    return num1 + num2;
}


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
    name:  'sandip',
    age: 36,
    details : function(){
        console.log("Hi Guys");
    }
}

// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// Already done in task 1 and 2


// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
 const subtract = (num1, num2) => num1 - num2
// Activity 3: Importing Entire Modules


// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
export const PI = 3.141592653589793
export const E = 2.71828;

// Function are already  done
export const add = (a, b) => a + b;

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

export  default subtract;
export  {sum, person};
import  {sum, person} from "./main.mjs"
import  subtract from "./main.mjs"
import  * as math from "./main.mjs"
import lodash from 'lodash'
import axios from "axios"


// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.


const result =sum(4, 5)
console.log(`The sum  is ${result}`);

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
console.log(person.name);

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const output = subtract(8,6)
console.log(output);
// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const num1 = 15;
const num2 = 10;

console.log(`The value of PI is ${math.PI}`);
console.log(`The value of E is ${math.E}`);
console.log(`The sum of ${num1} and ${num2} is ${math.add(num1, num2)}`);


// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
let arr = [1, 2, 3, 4, 4, 6, 7 ,8]

console.log("Before:", arr);
console.log("After:", lodash.chunk(arr, 2));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

async function fetchdata () {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log('Data:', response.data);
    } catch (error) {
        console.error("Error fetching data", error)
    }
}

fetchdata()

// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
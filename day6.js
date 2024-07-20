// Activity 1: Array Creation and Access
// Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5]
console.log(arr);

// Access the first and last elements of the array and log them to the console.
console.log(arr[0]);
console.log(arr[arr.length - 1]);


// Activity 2: Array Methods (Basic)
//  Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr);

// 4. Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);

// 5. Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);

// 6. Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log(arr);

// Activity 3:
// Array Methods (Intermediate)
// 7. Use the map method to create a new array where each number is doubled and log the new array.
const newArray = arr.map((val) => {
    return val * 2;
})

console.log("Original Array", arr);
console.log("New Array", newArray);

// 8. Use the filter method to create a new array with only even numbers and log the new array.
const newArr = arr.filter((val) => val % 2 === 0)
console.log(newArr);

// 9. Use the reduce method to calculate the sum of all numbers in the array and log the result.
const intialSum = 0;
const sum = arr.reduce((sum, val) => sum + val, intialSum)

console.log(sum);


// Activity 4: Array Iteration
// 10. Use a for loop to iterate over the array and log each element to the console.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
// 11. Use the forEach method to iterate over the array and log each element to the console.
array.forEach((element) => {
    array[element];
    console.log(element);
});

// Activity 5: Multi-dimensional Arrays
// 12. Create a two-dimensional array (matrix) and log the entire array to the console.
const twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(twoDimensionalArray);
// 13. Access and log a specific element from the two-dimensional array.
console.log("0 rows and 2nd column element :",twoDimensionalArray[0][2]);
// Tasks/Activities:

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Promise is created');
        resolve()
    }, 2000);
})


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promiseTwo = new Promise (function (resolve, reject) {
    setTimeout(() => {
        reject("This is an error message")
    }, 2000);
})

promiseTwo.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error('Promise Rejected :', error);
})

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Simulating a server fetch with a promise
function fetchDataFromServer(data, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  }
  
  // Chain of promises
  fetchDataFromServer("Fetching user data", 1000)
    .then((message) => {
      console.log(message); // First log
      return fetchDataFromServer("Fetching user orders", 2000);
    })
    .then((message) => {
      console.log(message); // Second log
      return fetchDataFromServer("Fetching user reviews", 1000);
    })
    .then((message) => {
      console.log(message); // Third log
      return fetchDataFromServer("Fetching user recommendations", 1500);
    })
    .then((message) => {
      console.log(message); // Fourth log
      console.log("All data fetched");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  


// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
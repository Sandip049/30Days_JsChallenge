// // Tasks/Activities:

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

// // Activity 2: Chaining Promises

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
      console.log(message);
      return fetchDataFromServer("Fetching user orders", 2000);
    })
    .then((message) => {
      console.log(message);
      return fetchDataFromServer("Fetching user reviews", 1000);
    })
    .then((message) => {
      console.log(message);
      return fetchDataFromServer("Fetching user recommendations", 1500);
    })
    .then((message) => {
      console.log(message);
      console.log("All data fetched");
    })
    .catch((error) => {
      console.error("Error:", error);
    });

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function logResolvedValue(promise) {
  try {
      const resolvedValue = await promise;
      console.log(resolvedValue);
  } catch (error) {
      console.error('Promise rejected:', error);
  }
}
const examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("Resolved value!");
  }, 2000);
});

logResolvedValue(examplePromise);


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleRejectedPromise(promise) {
  try {
      const resolvedValue = await promise;
      console.log('Resolved value:', resolvedValue);
  } catch (error) {
      console.error('Promise rejected:', error);
  }
}

const egPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject("An error occurred!");
  }, 2000);
});

handleRejectedPromise(egPromise);


// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://api.github.com/users/SandipGitt')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataFromAPI(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
  }
}

// Example usage:
const apiURL = 'https://api.github.com/users/SandipGitt';
fetchDataFromAPI(apiURL);

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
function fetchDataFromURLs(urls) {
  const promises = urls.map(url => fetch(url).then(response => response.json()));

  Promise.all(promises)
      .then(results => {
          results.forEach((data, index) => {
              console.log(`Data from URL ${index + 1}:`, data);
          });
      })
      .catch(error => {
          console.error('There was an error with one of the fetch operations:', error);
      });
}

// Example usage:
const urls = [
  'https://api.github.com/users/SandipGitt',
  'https://api.github.com/users/octocat',
  'https://api.github.com/users/defunkt'
];

fetchDataFromURLs(urls);


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
function fetchDataFromURLs(newUrls) {
  const promises = newUrls.map(url => fetch(url).then(response => response.json()));

  Promise.race(promises)
      .then(result => {
          console.log('First resolved promise data:', result);
      })
      .catch(error => {
          console.error('There was an error with one of the fetch operations:', error);
      });
}

// Example usage:
const newUrls = [
  'https://api.github.com/users/SandipGitt',
  'https://api.github.com/users/octocat',
  'https://api.github.com/users/defunkt'
];

fetchDataFromURLs(newUrls);

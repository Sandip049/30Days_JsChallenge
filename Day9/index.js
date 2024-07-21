// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("root").textContent = "hello"

// Task 2: Select an HTML element by its class and change its background color.

const classOne =  document.querySelector(".one");
classOne.style.backgroundColor = "green"

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const divOne = document.createElement("div")
divOne.textContent = "Created new div element"
document.body.appendChild(divOne)

// Task 4: Create a new li element and add it to an existing ul list.

const newli = document.createElement("li")
newli.textContent = "Added new li element"

const ul = document.getElementById("list")

ul.appendChild(newli)

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
classOne.remove()

// Task 6: Remove the last child of a specific HTML element.
let ull = document.getElementById("list")
let lastChild = ull.lastElementChild
// console.log(lastChild);
lastChild.remove()


// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let image = document.querySelector("img")
image.setAttribute("src", "https://th.bing.com/th?id=ORMS.17a811129f02d29d1dec0dc1434c9352&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=1.25&p=0")

// Task 8: Add and remove a CSS class to/from an HTML element.

let paragraph = document.getElementById("myParagraph")
paragraph.classList.add('highlight')

paragraph.classList.remove('highlight')


// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function changeText (){
    let paragraph = document.getElementById("myParagraph")

    paragraph.textContent = "Text content changed"
}

let button = document.querySelector(".button")

button.addEventListener("click",changeText)


// Task 10: Add a mouseover event listener to an element that changes its border color.

function changeBorderColor(){
    let changeColor = document.querySelector(".button")
    changeColor.style.borderColor = "green"
}

let buttonn = document.querySelector(".button")

buttonn.addEventListener("mouseover", changeBorderColor)
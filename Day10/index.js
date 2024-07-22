// Tasks/Activities:

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
function AddClickListener(){
    const paragraph = document.querySelector('.paragraph');
    paragraph.textContent = "Text changed";
}

const button = document.querySelector('.button');
button.addEventListener('click', AddClickListener)


// Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.querySelector('img');

image.addEventListener('dblclick',()=>{
    if (image.style.display === 'none'){
        image.style.display = 'block';
    } else {
        image.style.display = 'none'
    }
})

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
const paragraph =document.querySelector('.paragraph');
paragraph.addEventListener('mouseover',()=>{
    paragraph.style.backgroundColor = "green"
})


// Task 4: Add a mouseout event listener to an element that resets its background color.

const hover = document.querySelector("#hoverElement")

hover.addEventListener('mouseout',()=>{
    hover.style.backgroundColor = "red"
})


// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.querySelector('input')

input.addEventListener('keydown',(e)=>{
    console.log(e.key);
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

    const inputField = document.getElementById('inputField');
    const displayParagraph = document.getElementById('displayParagraph');

    inputField.addEventListener('keyup', () => {
        displayParagraph.textContent = `Current value: ${inputField.value}`;
    });


// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formEntries = Object.fromEntries(formData.entries());

        console.log('Form Data:', formEntries);
    });
});


// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const course = document.querySelector('#course')
const para3 = document.querySelector('#para3')

course.addEventListener('change', (event) => {
    para3.innerHTML  = event.target.value
});


// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let ul1 = document.querySelector('#ul1');

ul1.addEventListener('click', (event) => {
    if(event.target.nodeName === 'LI'){
        console.log(event.target.innerText);
    }
})
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parent  = document.querySelector(".parent")
const addElement  = document.querySelector(".addElement")


addElement.addEventListener("click" , ()=>{
const child = document.createElement("div")
child.innerHTML = "children"

parent.appendChild(child)

})
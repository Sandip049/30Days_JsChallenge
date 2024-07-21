// Activity 1: Object Creation and Access

// Create an object representing a book with properties like title, author, and year, and log the object to the console.
let Book = {
    title : "It Ends With Us",
    author : "Coleen hover",
    year : 2015
}

console.log(Book);
// Access and log the title and author properties of the book object.
console.log(Book.title);
console.log(Book.author);


// Activity 2: Object Methods
// 3. Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
Book.getDetails = function(){
    return `${Book.title} by ${Book.author}`;
}

console.log(Book.getDetails());

// 4. Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
Book.updateYear = function(year){
    this.year = year;
}
Book.updateYear(2020);
console.log(Book);

// Activity 3: Nested Objects
// 5. Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const Library = {
    name : 'HCOE Library',
    book: [
        {
            title : "It Ends With Us",
            author : "Coleen hover",
            year : 2015
        },
        {
            title : "Forever",
            author: "Jane smith",
            year : 2018
        }
    ]
}
console.log(Library);
// 6. Access and log the name of the library and the titles of all the books in the library.
console.log(Library.name);
// Using for of
for (const iterator of Library.book) {
    console.log(iterator.title);
}
// using forEach
Library.book.forEach((item) =>{
    console.log(item.title)
})
// Activity 4: The this Keyword
// 7. Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
Book.showTitleAndYear = function(){
    return `${this.title} in ${this.year}`
}
console.log(Book.showTitleAndYear());


// Activity 5: Object Iteration
// 8. Use a for…in loop to iterate over the properties of the book object and log each property and its value.
for (const key in Book) {
    console.log(`The property is ${key} and its value is ${Book[key]}`);

}

// 9. Use Object.keys() and Object.values() methods to log all the keys and values of the book object.

console.log(Object.keys(Book));

console.log(Object.values(Book));
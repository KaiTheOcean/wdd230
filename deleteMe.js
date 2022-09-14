// SEQUENCE 
// let means I am setting up a new variable 
let date = new Date();
console.log(date);

let year = date.getFullYear();
// this is a method, and method always need a () at the end
// log is a method

// taget the h1 tag
// querySelector is a method, its look for things in the document 
document.querySelector('h1').textContent = year;

// lastModifited is a property so it doesn't need ()
let currentDate = document.lastModified;

console.log(currentDate);

document.querySelector('div').textContent = currentDate;

// we might need to use concat to modify the footer

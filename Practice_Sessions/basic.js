// Question 1 (Easy) — Find Expensive Products
// let prices= [100,250,500,150,700];
// Create a new array containing only prices greater than 300.
// What is this question asking?
// Imagine you're building an e-commerce website.
// You only want to show premium products that cost more than ₹300.
// Input:
// [100,250,500,150,700]
// Output:
// [500,700]

// Concepts Tested
// Arrays
// filter()
let prices = [100, 250, 500, 150, 700];
function filterHighPriceProducts(prices) {
  return prices.filter((price) => price > 300);
}

const filteredPrices = filterHighPriceProducts(prices);
console.log(filteredPrices);

// Question 2 (Moderate) — Student Average
// let marks= [80,90,70,85,95];
// Calculate the average marks of all students.
// What is this question asking?
// A teacher has marks of students stored inside an array.

// You need to:
// 1. Find total marks.
// 2. Divide by number of students.
// Output:
// 84

// Concepts Tested
// Arrays
// reduce()
// length property

let marks = [80, 90, 70, 85, 95];

let average = marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
console.log(average);

// Question 3 (Hard) — Most Frequent Number

let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

let freq = numbers.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(freq);

// 🟢 Objects
// Question 4 (Easy) — Update User Age
let user = {
  name: "Ritik",
  age: 20,
};
// Update age to 21.

user["age"] = 21;
console.log(user);

// Question 5 (Moderate) — Print User Information

let user1 = {
  name: "Ritik",
  age: 20,
  city: "Bhopal",
};

// Print:
// Name:Ritik
// Age:20
// City:Bhopal
// using a loop.

for (let key in user1) {
  console.log(`${key} : ${user1[key]}`);
}

// Question 6 (Hard) — Highest Paid Employee

let employees = {
  aman: 25000,
  ritik: 50000,
  priya: 45000,
};

let highestPaidEmp = Number.MIN_SAFE_INTEGER;
let employee = "";
// for (let key in employees) {
//   if (highestPaidEmp < employees[key]) {
//     highestPaidEmp = employees[key];
//     employee = key;
//   }
// }

for (let [key, value] of Object.entries(employees)) {
  if (highestPaidEmp < Number(value)) {
    highestPaidEmp = value;
    employee = key;
  }
}

console.log(employee);

// Question 12 (Hard) — Student Grade Report
let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85],
  },
  {
    name: "Aman",
    marks: [50, 40, 60],
  },
];

let reportCard = students.map((student) => {
    let average = student.marks.reduce((acc, curr) => acc + curr, 0) / student.marks.length;
    return {name: student.name, average, grade: average > 80 ? "A" : (average > 60 ? "B" : average >= 50 ? "C" : "F")};
})
console.log(reportCard)


// Library Management System

let books = [];


function addBook(title, author){
    books.push({id: books.length + 1, title, author, borrowed: false})
}

function borrowBook(id){
    books = books.map((book) => book.id === id ? {...book, borrowed: true} : {...book})
}

function returnBook(id){
    books = books.map((book) => book.id === id ? {...book, borrowed: false} : {...book})
}

function showAvailableBooks(){

    if(books.length == 0){
        console.log("No Books available");
        return;
    }
    console.log("**************************************************Available Books****************************************")
    books.forEach((book) => {
        if(!book.borrowed){
            console.log(`Title: ${book.title}
Author: ${book.author}`)
        }
        
    })
}

addBook("Atomic Habits", "James Clear")
borrowBook(1)

showAvailableBooks()

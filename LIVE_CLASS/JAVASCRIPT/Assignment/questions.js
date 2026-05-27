// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals..
// const fullName = prompt("Enter you name: ")
// const age = Number(prompt("Enter your age: "))
// const city = prompt("In which do you live?")
// const qualification = prompt("What is the highest degree you have done?")

// alert(`My name is ${fullName}.
// I am ${age} years old and live in ${city}.
// I have done ${qualification} and currently looking for a Job.`)

// 2. Calculate the area of a rectangle.
const length = 20
const breadth = 10
console.log(`The area of rectangle is obtained by multipying its length to its breadth or width: ${length*breadth}`)

// 3. Calculate the simple interest.

const p = 2000
const r = 5
const t = 2

console.log(`The simple interest is: ${(p*r*t)/100}`)

// 4. Convert temperature from Celsius to Fahrenheit.

const tempInCelsius = 36
console.log(`The temperatur in fahrenheit is : ${(tempInCelsius*9/5) + 32} `)

// 5. Convert kilometers into meters.
const km = 9
console.log(`${km}kms is ${km*1000}meters`)

// 6. Calculate total marks and percentage of 5 subjects.
const marks1 = 95
const marks2 = 92
const marks3 = 94
const marks4 = 99
const marks5 = 92
const totalMarks = marks1 + marks2 + marks3 + marks4 + marks5

console.log(`The total marks are ${totalMarks} and percentage is ${(totalMarks/500).toFixed(2)*100}`)

// 7. Calculate electricity bill based on units consumed.

const units = 200
console.log(`Your electricity bill is ${200*6.50}`)

// 8. Create a username generator using first name and birth year.

const fName = 'Goku'
const birthYear = 2003

console.log(`Your username is: ${fName + birthYear}`)

// 9. Check whether a string starts with a specific letter.

console.log("object".startsWith('o'))

// 10. Count the total characters in a sentence excluding spaces.

console.log("This is a string".split(' ').join('').length)


// Logical Thinking Questions

// 1. Check whether a number is divisible by 2, 3, or both.

const num = 22;
if(num % 2 == 0){
    if(num % 3 == 0){
        console.log("It is divisible by both 2 and 3")
    }
    else{
        console.log("It is divisible by only 2")
    }
}
else if(num % 3 == 0){
    console.log("It is divisible by 3 only")
}


// Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.

console.log(Math.floor(Math.random()*(9999 - 1000 + 1)) + 1000)

// 4. Convert a full name into uppercase initials.

let fullName = "dev rathour hello i am son goku"
let output = ""
for(let i = 0; i < fullName.length; i++){
    if(i == 0 || fullName[i - 1] == ' '){
        output+= fullName[i].toUpperCase()
    }
    else{
        output += fullName[i]
    }
}
console.log(output)

console.log(this)

let arrowFn = () => 20;

console.log(arrowFn())
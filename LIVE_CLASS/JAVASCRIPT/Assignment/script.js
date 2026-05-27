// Console & Basics

// 1. Print "Hello JavaScript" in the console.

console.log("Hello Javascript")

// 2. Print your name, age, and city using one console.log().

var name = "Dev"
var age = 23
var city = "Shahjahanpur"

console.log("name ->", name, "age ->", age, "city->", city)

// 3. Print a warning message using console.warn().

console.warn("This is a warning.")

// 4. Print an error message using console.error().

console.error("Error Occurred")

// 5. Use console.table() to display an array of 5 numbers.

console.table([10, 20, 30, 40, 50])




// Variables

// 1. Create a variable called studentName and store your name in it.

var studentName = "Monkey D. Luffy"

// 2. Create a variable age and print it.

var age = 19
console.log(age)

// 3. Create two variables and swap their values.

var a = 20
var b = 40

// Method 1(With the help of third Variables)

var temp = a
a = b
b = temp
console.log(a, b)

// Method 2(Without the help of third Variables)

a = a + b
b = a - b
a = a - b

console.log(a, b)

// 4. Create a constant variable for PI and print it.

const PI = 3.14;
console.log(PI)

// 5. Declare a variable without assigning a value and print it.

var empty
console.log(empty)

// 6. Create a variable score and increase it by 10.

var score = 89

score = score + 10

console.log(score)

// 7. Create three variables for first name, last name, and full name.

var firstName = "Dev"
var lastName = "Rathour"
var fullName = firstName + " "  + lastName

console.log("First Name ->", firstName, "lastName->", lastName, "fullName", fullName)



// Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.

let str = "This is a string datatype variable"
let num = 99
let bool = true
let user = null
let account;

// 2. Check the type of different variables using typeof.

console.log(typeof str, typeof num, typeof bool, typeof user, typeof account)

// 3. Store your mobile number in a variable and check its type.

let phoneNo = 9999999999
console.log(typeof phoneNo)

// 4. Create a variable with value null and check its type.
let nullValue = null
console.log(typeof nullValue)

// 5. Create a bigint number and print it.

let bigNumber = 100000000000n
console.log(bigNumber)


// Type Conversion & Coercion

// 1. Convert the string "50" into a number.

console.log( typeof +"50")  // or Number("50")

// 2. Convert the number 100 into a string.
console.log(typeof (100 + "")) // or String(100)

// 3. Convert "true" into a boolean.
console.log(Boolean("true"))

// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`

console.log("5" + 2)
console.log("5" - 2)
console.log(true + 1)

// 5. Create a variable with value "123abc" and convert it into a number.

var value = "123abc"
console.log(Number(value))

// 6. Use parseInt() on "500px".

console.log(Number("500px"))


// Operators

// 1. Add two numbers and print the result.
console.log(1 + 2)

// 2. Find the remainder when 25 is divided by 4.
console.log(25%4)

// 3. Find the square of a number using exponent operator.
console.log(5**2)

// 4. Increment a variable using `++`.
// 5. Decrement a variable using `-`.
// 6. Use `+=` operator to increase a variable by 20.

let val = 10
val++
console.log(val)
val--
console.log(val)
val += 20
console.log(val)

// 7. Compare two numbers using >, <, >=, <=.
let num1 = 4
let num2 = 6
console.log(num1 > num2, num1 < num2, num1 >= num2, num1 <= num2)

// 8. Check if two values are strictly equal using ===.
console.log(10 === 10, "10" === 10)

// 9. Compare "10" and 10 using both == and ===.
console.log("10" == 10, "10" === 10)

// 10. Create two boolean variables and test &&, ||, and !.

let bool1 = true 
let bool2 = false
console.log(bool1 && bool2, bool1 || bool2, !bool1, !bool2)



// Strings

// 1. Create a string and print its length.
console.log("02".length)

// 2. Convert a string into uppercase.
console.log("uppercase".toUpperCase())

// 3. Convert a string into lowercase.
console.log("lowercase".toLowerCase())

// 4. Check if a string includes the word "JavaScript".

console.log("Javascript is a single threaded language used for both frontend and backend.".includes("Javascript"))

// 5. Extract the word "World" from "Hello World".

console.log("Hello World".slice(6, 11))
console.log("Hello World".split(' ')[1])

// 6. Replace "apple" with "mango" in a sentence.
console.log("apple is not mango, mango is not apple.".replace("apple", "mango"))
console.log("apple is not mango, mango is not apple.".replaceAll("apple", "mango"))

// 7. Split "HTML,CSS,JS" into an array.
console.log("HTML,CSS,JS".split(','))

// 8. Remove extra spaces from a string.
console.log("   This    string has   extra spaces.    ".trim())  // Not remove the spaces between words.

// 9. Repeat the word "Hi" 5 times.
console.log("Hi ".repeat(5))

// 10. Print the first character of a string.
console.log("Hello"[0])

// 11.  Use template literals to print:"My name is Aman and I am 20 years old"

console.log(`Hi, My name is ${firstName} and I am ${age} years old`)



// Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

console.log(Math.round(4.7))
console.log(Math.sqrt(81))

const arr = [10, 20, 5, 99]
console.log(Math.max(...arr))

console.log(Math.floor(Math.random()*10) + 1)
console.log(Number.parseInt("99.99"))
console.log(!isNaN(25))
console.log(3.141592.toFixed(2))


// Conditionals


// 1. Check whether a number is positive or negative.
const numInput = 10
if(num >= 0){
    console.log("Number is positive")
}
else{
    console.log("Number is negative")
}

// 2. Check whether a number is even or odd.
if(num % 2 == 0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}

// 3. Check whether a person is eligible to vote.
if(age >= 18){
    console.log("You are eligible to vote.")
}
else{
    console.log("You are not eligible to vote.")
}

// 4. Find the largest among two numbers.
if(num1 > num2){
    console.log("num1 is greater with the value of", num1)
}
else if(num1 < num2){
    console.log("num2 is greater with the value of", num2)
}
else{
    console.log("Both numbers are equal.")
}

// 5. Find the largest among three numbers.
let x = 6, y = 6, z = 4
if(x >= y && x >= z){
    console.log(`${x} is greater`)
}
else if(y >= x && y >= z){
    console.log(`${y} is greater`)
}
else{
    console.log(`${z} is greater`)

}

// 6. Check whether a year is a leap year.
const year = 2016
if(year % 4 == 0 && year%100 !== 0){
    console.log("Given year is a leap year")
}
else if(year % 400){
    console.log("Given year is a leap year")
}

// 7. Check whether a number is divisible by both 3 and 5.

if(num%3 == 0 && num%5 == 0){
    console.log("Yes, divisble by both 3 and 5")
}

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

let grade = 95
if(grade >= 90){
    console.log("Grade: A+")
}
else if(grade >= 75){
    console.log("Grade: B+")
}
else if(grade >= 50){
    console.log("Grade: C+")
}
else{
    console.log("Fail")
}

/*
1. Check whether a character is a vowel or consonant.
2. Create a calculator using `switch` statement.
3. Print the day name based on a number (1–7).
4. Check whether a username is `"admin"` and password is `"1234"`.
 */

let alphabet = 'a'
if(alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u'){
    console.log("Vowel")
}
else{
    console.log("Consonant")
}

let operator = '+'
switch (operator){
    case '+':
        console.log(num1 + num2)
        break
    case '-':
        console.log(num1 - num2)
        break
    case '*':
        console.log(num1*num2)
        break
    case '/':
        console.log(num1/num2)
        break
    case '%':
        console.log(num1%num2)
        break
    default:
        console.log("Invalid Operator")
}
    
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let dayNumber = 1
console.log(days[dayNumber - 1])

let username = "admin"
let password = 1234

if(username == "admin" && password == 1234){
    console.log("You are logged in as a admin.")
}

// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
// 2. Check whether `0` is truthy or falsy.
// 3. Check whether `[]` is truthy or falsy.
// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.

console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean([]))

let checkValid = "validVariable"

if(checkValid){
    console.log("Valid")
}
else{
    console.log("Invalid")
}

// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// 2. Check whether age is above 18 using ternary operator.
// 3. Find the greater number between two values using ternary operator.

console.log(num%2 == 0 ? "even" : "odd")
console.log(age > 18 ? "Above 18" : "Below 18")
console.log(num1 >= num2 ? "num1 is greater" : "num2 is greater")

console.log("v" > 5)


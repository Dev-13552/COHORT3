// TodoList(In-memory)

let todos = [];
let id = 1;

function addTodo(todo){
    todos.push({id, ...todo});
    id++;
}

function completeTodo(id){
    todos = todos.map((todo) => todo.id === id ? {...todo, isCompleted: true} : {...todo})
}

function deleteTodo(id){
    todos = todos.filter((todo) => todo.id !== id )
}

function updateTodo(id, name){
    todos = todos.map((todo) => todo.id === id ? {...todo, name} : {...todo});
}

addTodo({name: "Go to Gym", isCompleted: false});
addTodo({name: "Wake up at 5:00AM", isCompleted: false});

completeTodo(2);
updateTodo(2, "Wake up at 6:00AM")
console.log(todos)


// Shopping Cart Logic

let cart = []

function addToCart(name, price, quantity = 1){
    const existingItem = cart.find((item) => item.name === name)
    if(existingItem){
        existingItem.quantity += quantity;
        return;
    }
    cart.push({name, price, quantity})
}

function removeItem(name){
    cart = cart.filter((item) => item.name === name);
}

function getTotal(){
    return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

function showCart(){
    cart.forEach(item => {
        console.log(`${item.name} x${item.quantity} = ₹${item.price * item.quantity}`);
    })
    console.log(`Total: ₹${getTotal()}`);
}


addToCart("Notebook", 50, 2);
addToCart("Pen", 10, 5);
addToCart("Notebook", 50);   
showCart();

function wordFrequency(text){
    // let words = text.toLowerCase().split(' ')
    // let freq = {};

    // words.forEach((val) => {
    //     freq[val] = (freq[val] || 0) + 1
    // })

    // return freq;
    let words = text.toLowerCase().split(/\\s+/);
    let freq = {};

    words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
    });

    return freq;
}

let text = "the quick brown fox jumps over the lazy dog the fox is quick";
console.log(wordFrequency(text));

let arr = [1, 2, 3, 4];
arr.forEach((ele, idx) =>{
    arr[idx] = ele*2;
})

console.log(arr);

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
]

const group = users.reduce((acc, user) => {
    acc[user.age] ? acc[user.age].push({...user}) : acc[user.age] = [{...user}]
    return acc
    },{})
// let group = {};

// for(let user of users){
//     group[user.age] ? group[user.age].push({...user}) : group[user.age] = [{...user}]
// }

console.log(group)

const str = "banana"
let freq = {}

for(let char of str){
    freq[char] = (freq[char] || 0) + 1
}

console.log(freq)


function memoizedFactorial(){
    const cache = {};

    return (n) => {
        if(cache[n]){
            console.log("Returning from cache")
            return cache[n];
        }
        let fact = 1;
        for(let i = 1; i <= n; i++){
            fact *= i;
        }
        if(!cache[n]){
            cache[n] = fact;
        }
        return fact;
    }
}

const factorial = memoizedFactorial();

console.log(factorial(5));
console.log(factorial(5));



let array = [2, 6, 1, 19, "Luffy", true, ["Nami", "Zoro", "Sanji", "Ussop"]];

for(let ele of array){
    if(Array.isArray(ele)){
        console.log(ele);
    }
}

// array.unshift(20, 30, 60);
console.log(array)
array.shift()

arr = [1, 2, 6, 7, 3, 9, 8, 4];
// arr.sort((a, b) => {
//     if((a % 2 == 0) != (b % 2 == 0)){
//         return (a % 2 - b % 2);
//     }
//     return a - b;
// })

// console.log(arr)

let newArray = ["Naruto", "Sasuke", "Sakura", "Hinata", 2, 3, 5, 6];

newArray[0].toUpperCase()

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

const newProducts = products.map((product) => {return {...product, discountPrice: product.price*0.9}});
console.log(newProducts)


let students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];

const index = students.findIndex((student) => student.marks < 33);
console.log(index)

function countProperties(obj){
    return Object.keys(obj).length;
}

console.log("Total no. of keys are:", countProperties({a:1,b:2,c:3}))

for(let key in products[0]){
    console.log(`${key} : ${products[0][key]}`)
}
console.log("email" in products[0])

console.log(Object.entries(products[0]))



const arr3 = ["name", "Anubhav", "age", 24]

let obj = {}

arr3.forEach((ele, index) => {
    if(index % 2 == 0){
        obj[ele] = arr3[index + 1]
    }
})
console.log(obj)


function sum(a, b, c){
    return a + b + c;
}

console.log(sum(2, 5, 4));

const {name, price, discountPrice = 20} = products[0]

console.log(discountPrice)

Object.seal(products[0])

Object.freeze()

console.log(typeof [])
console.log([] == false)

console.log([1,2] + [3,4]);

function x(a,b){
   return a+b;
}
console.log(x(2));

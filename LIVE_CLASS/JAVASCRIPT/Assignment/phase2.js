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


const taskInput = document.querySelector("#task");
const addBtn = document.querySelector("#addBtn");
const category = document.querySelector("#category");
const cardContainer = document.querySelector(".cards");
const themeBtn = document.querySelector("#theme");
const body = document.querySelector("body");
const pendingTasks = document.querySelector(".pending");
const completedTasks = document.querySelector(".completed");
const main = document.querySelector("main");
const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const bubbleBtn = document.querySelector("#bubble");
const captureBtn = document.querySelector("#capture");
const log = document.querySelector(".log");
const closeBtn = document.querySelector("#closeBtn");
const openBtn = document.querySelector("#openBtn");
const pipelineEle = document.querySelector(".pipeline");
const search = document.querySelector("#search");

let NumberOfCompletedTasks = Number(localStorage.getItem("completedTasks") )|| 0;
let capture = false;
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let updatedIndex = null;
let theme = localStorage.getItem("theme") || body.dataset.theme;
let filteredTodos = [];

function renderUI() {
  console.log(todos);
  //   cardContainer.innerHTML = "";
  pendingTasks.innerHTML = `<h2>Pending <span>${todos.length - NumberOfCompletedTasks}</span></h2>`;
  completedTasks.innerHTML = `<h2>Completed <span>${NumberOfCompletedTasks}</span></h2>`;
  if(search.value){
    filteredTodos.forEach((todo, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.dataset.id = todo.id;
    div.dataset.status = todo.status;
    div.dataset.category = todo.category;
    const completeClass = todo.status == "Completed" ? "stroke" : "";
    const checkedVal = todo.status == "Completed" ? "checked" : "";
    const disabled = todo.status === "Completed" || updatedIndex != null ? "disabled" : "";
    const disabled2 = updatedIndex != null ? "disabled" : "";

    div.innerHTML = `<div class="left">
            <input type="checkbox" ${disabled2} class= checkTask onchange = "completeTodo(${todo.id})" ${checkedVal}/>

            <div class="taskInfo">
              <h2 class = ${completeClass}>${todo.task}</h2>
              <p class="category"> ${todo.category}</p>
            </div>
          </div>

          <div class="right">
            <button class="editBtn" ${disabled} onclick = "editTodo(${todo.id})"><i class="ri-edit-2-line"></i></button>
            <button class="deleteBtn" ${disabled2} onclick = "deleteTodo(${todo.id})"><i class="ri-delete-bin-5-line"></i></button>
          </div>`;
    if (todo.status === "Pending") {
      console.log("hello");
      pendingTasks.appendChild(div);
    } else {
      completedTasks.appendChild(div);
    }
  });
  }
  else{
    todos.forEach((todo, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.dataset.id = todo.id;
    div.dataset.status = todo.status;
    div.dataset.category = todo.category;
    const completeClass = todo.status == "Completed" ? "stroke" : "";
    const checkedVal = todo.status == "Completed" ? "checked" : "";
    const disabled = todo.status === "Completed" || updatedIndex != null ? "disabled" : "";
    const disabled2 = updatedIndex != null ? "disabled" : "";

    div.innerHTML = `<div class="left">
            <input type="checkbox" ${disabled2} class= checkTask onchange = "completeTodo(${todo.id})" ${checkedVal}/>

            <div class="taskInfo">
              <h2 class = ${completeClass}>${todo.task}</h2>
              <p class="category"> ${todo.category}</p>
            </div>
          </div>

          <div class="right">
            <button class="editBtn" ${disabled} onclick = "editTodo(${todo.id})"><i class="ri-edit-2-line"></i></button>
            <button class="deleteBtn" ${disabled2} onclick = "deleteTodo(${todo.id})"><i class="ri-delete-bin-5-line"></i></button>
          </div>`;
    if (todo.status === "Pending") {
      console.log("hello");
      pendingTasks.appendChild(div);
    } else {
      completedTasks.appendChild(div);
    }
  });
  }
}

function addTodo() {
  const taskInputValue = taskInput.value; //taskInput.getAttribute("value") gives the static value that has been given to the attribute value, and .value gives dynamic value.
  const categoryValue = category.value;

  if (!taskInputValue || taskInputValue.trim() === "") {
    taskInput.value = "";
    alert("Task cannot be empty");
    return;
  }

  let obj = {
    id: Date.now(),
    task: taskInputValue,
    status: "Pending",
    category: categoryValue,
  };

  if (updatedIndex != null) {
    const todo = todos[updatedIndex];
    todos[updatedIndex] = {
      ...todo,
      task: taskInputValue,
      category: categoryValue,
    };
    updatedIndex = null;
    addBtn.textContent = "+ Add";
  } else {
    todos.push(obj);
    console.log(todos);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  NumberOfCompletedTasks = todos.reduce((acc, curr) => curr.status == "Completed" ?  acc + 1 : acc , 0)
  localStorage.setItem("completedTasks", NumberOfCompletedTasks);
  if(filteredTodos && filteredTodos.length != 0){
    window.location.reload()
  }
  renderUI();
  taskInput.value = "";
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id != id);
  NumberOfCompletedTasks = todos.reduce((acc, curr) => curr.status == "Completed" ?  acc + 1 : acc , 0)
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("completedTasks", NumberOfCompletedTasks);
  if(filteredTodos){
    filteredTodos = filteredTodos.filter((todo) => todos.includes(todo));
  }
  renderUI();
  console.log(todos);
  
}

function editTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  updatedIndex = todos.findIndex((todo) => todo.id === id);
  taskInput.value = todo.task;
  addBtn.textContent = "Save";
  category.value = todo.category;
  renderUI();
  // let prompt = window.prompt("Edit task", todo.task);
  // while(prompt.trim() == ""){
  //     alert("Task cannot be empty");
  //     prompt = window.prompt("Edit task", todo.task);
  // }

  // todos = todos.map((todoEle) => todoEle.id === id ? {...todo, task: prompt} : todoEle);
  // renderUI();
}

function completeTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          status: todo.status == "Completed" ? "Pending" : "Completed",
        }
      : todo,
  );
  NumberOfCompletedTasks = todos.reduce((acc, curr) => curr.status == "Completed" ?  acc + 1 : acc , 0)
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("completedTasks", NumberOfCompletedTasks);
  if(filteredTodos && filteredTodos.length != 0){
    window.location.reload()
  }
  renderUI();
}

function changeTheme() {
  if (theme == "dark") {
    theme = "light";
    body.dataset.theme = "light";
    localStorage.setItem("theme", theme);
    body.style.color = "black";
    body.style.backgroundColor = "white";
    main.style.backgroundColor = "white";
    main.style.color = "black";
    themeBtn.innerHTML = `<i class="ri-moon-clear-line"></i>`;
  } else {
    theme = "dark";
    body.dataset.theme = "dark";
    localStorage.setItem("theme", theme);
    body.style.color = "white";
    body.style.backgroundColor = "black";
    main.style.backgroundColor = "black";
    main.style.color = "white";
    themeBtn.innerHTML = `<i class="ri-sun-fill"></i>`;
  }
}

function init() {
  if (theme == "light") {
    body.style.color = "black";
    body.style.backgroundColor = "white";
    main.style.backgroundColor = "white";
    main.style.color = "black";
    themeBtn.innerHTML = `<i class="ri-moon-clear-line"></i>`;
  } else {
    body.style.color = "white";
    body.style.backgroundColor = "black";
    main.style.backgroundColor = "black";
    main.style.color = "white";
    themeBtn.innerHTML = `<i class="ri-sun-fill"></i>`;
  }
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});

themeBtn.addEventListener("click", (e) => {
  changeTheme();
});

renderUI();
init();

function handleGrandParent() {
  log.innerHTML += "<p>GrandParent</p>";
  console.log("GrandParent");
}
function handleParent() {
  log.innerHTML += "<p>Parent</p>";
  console.log("Parent");
}
function handleChild() {
  log.innerHTML += "<p>Child</p>";
  console.log("Child");
}

grandParent.addEventListener("click", handleGrandParent, capture);
parent.addEventListener("click", handleParent, capture);
child.addEventListener("click", handleChild, capture);

function handleEvents(val) {
  grandParent.removeEventListener("click", handleGrandParent, capture);
  parent.removeEventListener("click", handleParent, capture);
  child.removeEventListener("click", handleChild, capture);
  capture = val;
  grandParent.addEventListener("click", handleGrandParent, capture);
  parent.addEventListener("click", handleParent, capture);
  child.addEventListener("click", handleChild, capture);
  if (val) {
    captureBtn.classList.add("active");
    bubbleBtn.classList.remove("active");
  } else {
    bubbleBtn.classList.add("active");
    captureBtn.classList.remove("active");
  }
}

bubbleBtn.addEventListener("click", (e) => {
  handleEvents(false);
});
captureBtn.addEventListener("click", (e) => {
  handleEvents(true);
});

closeBtn.addEventListener('click', (e) => {
  pipelineEle.style.display = "none"
})
openBtn.addEventListener('click', (e) => {
  pipelineEle.style.display = "flex"
})

search.addEventListener("input", (e)=>{
  let val = search.value.trim().toLowerCase();
  filteredTodos =  todos.filter((todo) => todo.task.toLowerCase().includes(val))
  renderUI()
  console.log(filteredTodos)
})
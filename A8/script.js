const saveBtn = document.querySelector("#saveBtn");
const type = document.querySelector("#type");
const desc = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const date = document.querySelector("#date");
const category = document.querySelector("#tx-category");
const addBtn = document.querySelector(".add-btn");
const overlayForm = document.querySelector(".overlay-form");
const closeBtn = document.querySelector("#closeBtn");
const formHeading = document.querySelector(".form-heading");
const form = document.querySelector(".form-card");
const darkModeInput = document.querySelector("#darkModeToggle");
const resetBtn = document.querySelector("#resetBtn");
const chartEle = document.querySelector("#expenseChart");
let username = document.querySelector(".user-name");
let logoutBtn = document.querySelector(".logoutBtn");
let fullName = document.querySelector("#fullname");
let currencySts = document.querySelector("#currency");

// table Elements
const tableBody = document.querySelector(".table-body");

// Dom Elements
const balanceEl = document.getElementById("curr-balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const countEl = document.getElementById("total-tx");



// Variables
let userProfile = JSON.parse(localStorage.getItem("user")) || {
  username: "Guest",
  currency: "$",
};
let storageKey = `transactions_${userProfile.username}`;
let transactions = JSON.parse(localStorage.getItem(storageKey)) || [];
let updateIndex = null;
let chart;


// Functions
function editTransaction(id, index) {
  formHeading.textContent = "Edit Transaction";
  const trsc = transactions.find((tx) => tx.id === id);
  type.value = trsc.type;
  amount.value = trsc.amount;
  date.value = trsc.date;
  category.value = trsc.category;
  desc.value = trsc.description;
  updateIndex = index;
  overlayForm.style.display = "flex";
}
function deleteTransaction(id) {
  const isConfirmed = confirm(
    "Are you sure you want to delete this transaction?",
  );
  if (!isConfirmed) {
    return;
  }
  transactions = transactions.filter((tx) => tx.id !== id);
  localStorage.setItem(storageKey, JSON.stringify(transactions));
  updateUI();
}

function createChart(totalIncome, totalExpense) {
  chart?.destroy();
  chart = new Chart(chartEle, {
    type: "bar",
    data: {
      labels: ["Income vs Expenses"],
      datasets: [
        {
          label: "Income",
          data: [totalIncome],
          backgroundColor: "#15803d",
        },
        {
          label: "Expenses",
          data: [totalExpense],
          backgroundColor: "#dc2626",
        },
      ],
    },
  });
}

function updateUI(txs = transactions) {
  const totalIncome = txs.reduce(
    (acc, curr) => (curr.type == "income" ? (acc += curr.amount) : (acc = acc)),
    0,
  );
  const totalExpense = txs.reduce(
    (acc, curr) =>
      curr.type == "expense" ? (acc += curr.amount) : (acc = acc),
    0,
  );
  const cardCurrency = userProfile.currency;
  balanceEl.textContent = `${cardCurrency}${totalIncome - totalExpense}`;
  incomeEl.textContent = `${cardCurrency}` + totalIncome;
  expenseEl.textContent = `${cardCurrency}` + totalExpense;
  countEl.textContent = txs.length;

  tableBody.innerHTML = "";
  txs.forEach((tx, index) => {
    const sign = tx.type === "income" ? `+` : `-`;
    const currency = userProfile.currency;
    const currencyColor = tx.type === "income" ? "color:green" : "color:red";
    tableBody.innerHTML += `<tr>
                <td>${tx.date}</td>
                <td><strong>${tx.description}</strong></td>
                <td style = "">${tx.category}</td>
                <td style = ${currencyColor}>${sign}${currency}${tx.amount}</td>
                <td style = "display:flex; gap: 1rem;">
                <span onclick = "editTransaction(${tx.id}, ${index})" style = "color: blue; cursor: pointer;"><i class="fa-solid fa-pen"></i></span>
                <span onclick = "deleteTransaction(${tx.id})" style = "color: red; cursor: pointer;"><i class="fa-solid fa-trash"></i></span>
                </td>
              </tr>`;
  });

  createChart(totalIncome, totalExpense);
}

function init() {
  currencySts.value = userProfile.currency;
  fullName.value = userProfile.username;
  username.textContent = `| ${userProfile.username}`;
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    type: type.value,
    category: category.value,
    amount: Number(amount.value),
    date: date.value,
    description: desc.value,
    id: Date.now(),
  };
  console.log(obj);

  if (updateIndex != null) {
    transactions[updateIndex] = obj;
    console.log(updateIndex);
    updateIndex = null;
    formHeading.textContent = "Add Transaction";
  } else {
    console.log(updateIndex);
    transactions.push(obj);
  }
  localStorage.setItem(storageKey, JSON.stringify(transactions));
  overlayForm.style.display = "none";
  updateUI();
});
addBtn.addEventListener("click", (e) => {
  overlayForm.style.display = "flex";
});
closeBtn.addEventListener("click", (e) => {
  overlayForm.style.display = "none";
});

// Current theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  darkModeInput.checked = true;
}
// Change theme
darkModeInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});

resetBtn.addEventListener("click", () => {
  const isConfirmed = confirm("This will delete all the data. Are you Sure?");
  if (!isConfirmed) {
    return;
  }
  transactions = [];
  userProfile.currency = "$";
  localStorage.setItem(storageKey, JSON.stringify(transactions));
  localStorage.setItem("user", JSON.stringify(userProfile));
  updateUI();
});

// Initial Load => dashboard tab;
const dashboard = document.querySelector(".dashboard-tab");
const dashboardTab = document.querySelector(".dashboard");
dashboard.classList.add("background-active");
dashboardTab.classList.add("active");

const settings = document.querySelector(".settings-tab");
const settingsTab = document.querySelector(".settings");

// Changing tabs
dashboard.addEventListener("click", () => {
  dashboard.classList.add("background-active");
  dashboardTab.classList.add("active");
  settings.classList.remove("background-active");
  settingsTab.classList.remove("active");
});
settings.addEventListener("click", () => {
  dashboard.classList.remove("background-active");
  dashboardTab.classList.remove("active");
  settings.classList.add("background-active");
  settingsTab.classList.add("active");
});


// Update profile in Settings 
const settingsForm = document.querySelector(".profile-inputs");
settingsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("registeredUsers"));
  let userFullName = userProfile.username;
  let isExists = users.some((user) => user.username == fullName.value);

  if (isExists && userFullName != fullName.value) {
    alert("Username already exists, Please choose another username.");
    return;
  }
  userProfile.username = fullName.value;
  userProfile.currency = currencySts.value;

  localStorage.removeItem(storageKey);
  storageKey = `transactions_${userProfile.username}`;
  localStorage.setItem(storageKey, JSON.stringify(transactions));

  localStorage.setItem("user", JSON.stringify(userProfile));
  users = users.map((user) =>
    user.username == userFullName
      ? { ...user, username: userProfile.username, currency: userProfile.currency }
      : { ...user },
  );
  localStorage.setItem("registeredUsers", JSON.stringify(users));
  init();
  updateUI();
  alert("Changes Saved Successfully!");
});


// Filter Section
const filter = document.querySelector("#filter");
filter.addEventListener("change", (e) => {
  const value = filter.value;
  if (value === "all") {
    updateUI();
  } else if (value === "income") {
    let txToShow = transactions.filter((tx) => tx.type === "income");
    updateUI(txToShow);
  } else {
    let txToShow = transactions.filter((tx) => tx.type === "expense");
    updateUI(txToShow);
  }
});

const search = document.querySelector("#search-bar");
search.addEventListener("input", (e) => {
  const value = search.value.trim().toLowerCase();
  let txToShow = transactions.filter(
    (tx) =>
      tx.description.toLowerCase().includes(value) ||
      tx.category.toLowerCase().includes(value),
  );
  updateUI(txToShow);
});

// Handles Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.replace("login.html");
});


// Initial Render
init();
updateUI();
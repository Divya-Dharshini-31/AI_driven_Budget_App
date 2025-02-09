let totalBudget = 0;
let totalExpenses = 0;

function setBudget() {
    totalBudget = document.getElementById("budget-input").value;
    document.getElementById("total-budget").innerText = `₹${totalBudget}`;
}

function addExpense() {
    let expenseName = document.getElementById("expense-name").value;
    let expenseAmount = parseInt(document.getElementById("expense-amount").value);

    if (!expenseName || !expenseAmount) {
        alert("Please enter valid expense details.");
        return;
    }

    totalExpenses += expenseAmount;
    document.getElementById("total-expenses").innerText = `₹${totalExpenses}`;

    let listItem = document.createElement("li");
    listItem.innerText = `${expenseName}: ₹${expenseAmount}`;
    document.getElementById("expenses").appendChild(listItem);
}

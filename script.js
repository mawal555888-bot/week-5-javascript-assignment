let budget = Number(prompt("Enter your monthly budget:"));
let expenses = Number(prompt("Enter your total expenses:"));

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

let remainingBalance = calculateBalance(budget, expenses);

console.log("SpendWise Budget:", budget);
console.log("SpendWise Expenses:", expenses);
console.log("SpendWise Remaining Balance:", remainingBalance);

import React from "react";
import "./Transactions.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Transactions = () => {
  const transactionData = [
    { id: 1, type: "Income", amount: 5000, category: "Salary", date: "Feb 10, 2025", status: "Completed" },
    { id: 2, type: "Expense", amount: 1200, category: "Groceries", date: "Feb 12, 2025", status: "Completed" },
    { id: 3, type: "Expense", amount: 800, category: "Transport", date: "Feb 14, 2025", status: "Pending" },
    { id: 4, type: "Income", amount: 2000, category: "Freelance", date: "Feb 15, 2025", status: "Completed" },
    { id: 5, type: "Expense", amount: 500, category: "Entertainment", date: "Feb 18, 2025", status: "Failed" },
  ];

  return (
    <div className="transactions">
      <h1 className="title">Transactions 💰</h1>

      <div className="transaction-list">
        {transactionData.map((transaction) => (
          <div key={transaction.id} className={`transaction-item ${transaction.type === "Income" ? "income" : "expense"}`}>
            <div className="transaction-icon">
              {transaction.type === "Income" ? <FaArrowUp className="income-icon" /> : <FaArrowDown className="expense-icon" />}
            </div>
            <div className="transaction-details">
              <span className="transaction-category">{transaction.category}</span>
              <span className="transaction-date">{transaction.date}</span>
            </div>
            <div className="transaction-amount">
              {transaction.type === "Income" ? "+" : "-"}${transaction.amount}
            </div>
            <span className={`transaction-status ${transaction.status.toLowerCase()}`}>{transaction.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;

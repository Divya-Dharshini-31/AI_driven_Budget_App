import React from "react";
import BarChart from "./BarChart";
import "./Dashboard.css";
import { FaWallet, FaShoppingCart, FaPiggyBank } from "react-icons/fa";

const Dashboard = () => {
  const transactions = [
    { id: 1, date: "Feb 15, 2025", category: "Groceries", amount: "$200", type: "Expense" },
    { id: 2, date: "Feb 14, 2025", category: "Transport", amount: "$50", type: "Expense" },
    { id: 3, date: "Feb 13, 2025", category: "Salary", amount: "$3000", type: "Income" },
    { id: 4, date: "Feb 10, 2025", category: "Dining", amount: "$100", type: "Expense" },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard 📊</h1>

      <div className="cards">
        <div className="card card-green">
          <FaWallet className="icon" />
          <h2>Total Budget</h2>
          <p>$5000</p>
        </div>
        <div className="card card-red">
          <FaShoppingCart className="icon" />
          <h2>Total Expenses</h2>
          <p>$1200</p>
        </div>
        <div className="card card-blue">
          <FaPiggyBank className="icon" />
          <h2>Remaining Balance</h2>
          <p>$3800</p>
        </div>
      </div>

      <h2 className="section-title">Recent Transactions</h2>
      <div className="expense-section">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.date}</td>
                <td className="expense-category">{txn.category}</td>
                <td className="expense-amount">{txn.amount}</td>
                <td className={txn.type === "Income" ? "income" : "expense"}>{txn.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section-title">Expense Analysis</h2>
      <div className="chart-container">
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;

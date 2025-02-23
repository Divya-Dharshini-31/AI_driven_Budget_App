import React from "react";
import { FaUtensils, FaBus, FaShoppingBag, FaTv, FaBolt, FaCheckCircle } from "react-icons/fa";
import "./BudgetForecast.css";

const BudgetForecast = () => {
  const income = 20000; // Sample income for calculation
  const forecast = [
    { category: "Food", amount: 5000, icon: <FaUtensils color="#FF5733" /> },
    { category: "Transport", amount: 2000, icon: <FaBus color="#3498db" /> },
    { category: "Entertainment", amount: 3000, icon: <FaTv color="#9b59b6" /> },
    { category: "Shopping", amount: 4000, icon: <FaShoppingBag color="#f39c12" /> },
    { category: "Bills", amount: 6000, icon: <FaBolt color="#e74c3c" /> },
  ];

  // Generate recommendations based on spending
  const recommendations = forecast.map((item) => {
    const percentage = (item.amount / income) * 100;
    let advice = "";

    if (percentage > 30) {
      advice = `Reduce spending on ${item.category}. It's ${percentage.toFixed(1)}% of your income!`;
    } else {
      advice = `Good job on ${item.category}! 👍`;
    }

    return { ...item, advice };
  });

  return (
    <div className="forecast-container">
      <h2>Budget Forecast 📊</h2>
      <table className="forecast-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount (₹)</th>
            <th>Advice</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((item, index) => (
            <tr key={index} className="forecast-item">
              <td>{item.icon} {item.category}</td>
              <td>₹{item.amount.toFixed(2)}</td>
              <td className={item.advice.includes("Reduce") ? "alert" : "success"}>
                {item.advice.includes("Reduce") ? "⚠️ " : <FaCheckCircle color="green" />} {item.advice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetForecast;

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import "./BarChart.css"; // Import CSS

const defaultData = [
  { name: "Rent", amount: 800 },
  { name: "Food", amount: 400 },
  { name: "Transport", amount: 200 },
  { name: "Entertainment", amount: 150 },
  { name: "Savings", amount: 600 },
  { name: "Shopping", amount: 300 },
];

const BarChartComponent = () => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Monthly Expense Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={defaultData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "#333" }} />
          <YAxis tick={{ fill: "#333" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#4CAF50" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;

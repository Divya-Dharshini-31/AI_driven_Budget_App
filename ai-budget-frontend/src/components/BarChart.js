import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./BarChart.css"; // Import CSS

const data = [
  { name: "Rent", amount: 800 },
  { name: "Food", amount: 400 },
  { name: "Transport", amount: 200 },
  { name: "Entertainment", amount: 150 },
];

const BarChartComponent = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;

import React from "react";
import BarChart from "./BarChart";
import "./Dashboard.css"; // Import CSS

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="title">Dashboard</h1>
      <div className="cards">
        <div className="card card-green">
          <h2>Total Budget</h2>
          <p>$5000</p>
        </div>
        <div className="card card-red">
          <h2>Total Expenses</h2>
          <p>$1200</p>
        </div>
        <div className="card card-blue">
          <h2>Remaining Balance</h2>
          <p>$3800</p>
        </div>
      </div>
      <h2 className="chart-title">Expense Analysis</h2>
      <BarChart />
    </div>
  );
};

export default Dashboard;

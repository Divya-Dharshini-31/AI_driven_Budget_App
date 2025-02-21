import React, { useEffect, useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [budgetData, setBudgetData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/budget/")
      .then((response) => response.json())
      .then((data) => setBudgetData(data))
      .catch((error) => console.error("Error fetching budget data:", error));

    fetch("http://127.0.0.1:8000/api/expense/")
      .then((response) => response.json())
      .then((data) => setExpenseData(data))
      .catch((error) => console.error("Error fetching expense data:", error));
  }, []);

  const expenseCategories = expenseData.map((expense) => expense.category);
  const expenseAmounts = expenseData.map((expense) => parseFloat(expense.amount));

  const pieData = {
    labels: expenseCategories,
    datasets: [
      {
        data: expenseAmounts,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8AFFA3", "#F87CFF"],
      },
    ],
  };

  const lineData = {
    labels: expenseData.map((expense) => new Date(expense.date).toLocaleDateString()),
    datasets: [
      {
        label: "Spending Over Time",
        data: expenseData.map((expense) => parseFloat(expense.amount)),
        borderColor: "#36A2EB",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Budget Dashboard</h2>

      <div style={styles.budgetSection}>
        <h3>Total Budget: ${budgetData.reduce((sum, b) => sum + parseFloat(b.total_amount), 0).toFixed(2)}</h3>
      </div>

      {/* Charts Section */}
      <div style={styles.chartsContainer}>
        <div style={styles.pieChartBox}>
          <h3>Expense Breakdown</h3>
          <Pie data={pieData} />
        </div>

        <div style={styles.lineChartBox}>
          <h3>Spending Trends</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  heading: {
    color: "#333",
    fontSize: "28px",
    marginBottom: "20px",
  },
  budgetSection: {
    backgroundColor: "#36A2EB",
    padding: "15px",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "20px",
    marginBottom: "20px",
  },
  chartsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap", // Ensures charts stay in one row
    gap: "20px",
    width: "100%",
  },
  pieChartBox: {
    width: "30%",
    minWidth: "250px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  lineChartBox: {
    width: "65%",
    minWidth: "500px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Dashboard;

import React, { useState } from "react";
import { FaUtensils, FaTshirt, FaHome, FaLightbulb, FaTint } from "react-icons/fa";
import { MdOutlineMovie } from "react-icons/md";
import "./Roadmap.css";

const Roadmap = () => {
  const [salary, setSalary] = useState("");
  const [budget, setBudget] = useState(null);

  const calculateBudget = () => {
    const salaryNum = parseFloat(salary);
    if (isNaN(salaryNum) || salaryNum <= 0) {
      alert("Please enter a valid salary!");
      return;
    }

    setBudget({
      food: (salaryNum * 0.3).toFixed(2),
      clothing: (salaryNum * 0.1).toFixed(2),
      shelter: (salaryNum * 0.3).toFixed(2),
      electricity: (salaryNum * 0.1).toFixed(2),
      water: (salaryNum * 0.1).toFixed(2),
      entertainment: (salaryNum * 0.1).toFixed(2),
    });
  };

  return (
    <div className="roadmap-container">
      <h2>📍 Personalized Finance Roadmap</h2>
      <p>Enter your salary to see your budget allocation:</p>
      <input
        type="number"
        placeholder="Enter your salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button onClick={calculateBudget}>Generate Roadmap</button>

      {budget && (
        <div className="roadmap">
          <div className="roadmap-row">
            <div className="step up"><FaUtensils className="icon red" /> <h3>Food - ₹{budget.food}</h3></div>
            <div className="connector"></div>
            <div className="step down"><FaTshirt className="icon blue" /> <h3>Clothing - ₹{budget.clothing}</h3></div>
            <div className="connector"></div>
            <div className="step up"><FaHome className="icon brown" /> <h3>Shelter - ₹{budget.shelter}</h3></div>
            <div className="connector"></div>
            <div className="step down"><FaLightbulb className="icon yellow" /> <h3>Electricity - ₹{budget.electricity}</h3></div>
            <div className="connector"></div>
            <div className="step up"><FaTint className="icon blue" /> <h3>Water - ₹{budget.water}</h3></div>
            <div className="connector"></div>
            <div className="step down"><MdOutlineMovie className="icon purple" /> <h3>Entertainment - ₹{budget.entertainment}</h3></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
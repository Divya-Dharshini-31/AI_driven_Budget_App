import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo">💰 AI Budget</h1>
      <nav>
        <Link to="/" className="nav-btn"><FaHome /> Dashboard</Link>
        <Link to="/transactions" className="nav-btn"><FaChartBar /> Transactions</Link>
        <Link to="/settings" className="nav-btn"><FaCog /> Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;

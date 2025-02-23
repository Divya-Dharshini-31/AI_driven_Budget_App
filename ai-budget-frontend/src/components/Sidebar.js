import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaCog, FaComments, FaClipboardList, FaRoad } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ toggleChatbot }) => {
  return (
    <div className="sidebar">
      <h1 className="logo">💰 AI Budget</h1>
      <nav>
        <Link to="/" className="nav-btn"><FaHome /> Dashboard</Link>
        <Link to="/transactions" className="nav-btn"><FaChartBar /> Transactions</Link>
        <Link to="/settings" className="nav-btn"><FaCog /> Settings</Link>
        <button className="nav-btn" onClick={toggleChatbot}>
          <FaComments /> Chatbot
        </button>
        <Link to="/budget-forecast" className="nav-btn"><FaClipboardList /> Budget Forecast</Link>
        <Link to="/roadmap" className="nav-btn">
          <FaRoad /> Roadmap
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

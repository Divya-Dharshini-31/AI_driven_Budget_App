import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaCog, FaRobot } from "react-icons/fa";
import "./Sidebar.css";
import Chatbot from "./Chatbot"; // Import chatbot component

const Sidebar = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="sidebar">
      <h1 className="logo">💰 AI Budget</h1>
      <nav>
        <Link to="/" className="nav-btn"><FaHome /> Dashboard</Link>
        <Link to="/transactions" className="nav-btn"><FaChartBar /> Transactions</Link>
        <Link to="/settings" className="nav-btn"><FaCog /> Settings</Link>
        
        {/* Chatbot Button */}
        <button className="nav-btn chatbot-btn" onClick={toggleChatbot}>
          <FaRobot /> Chatbot
        </button>
      </nav>

      {/* Chatbot Box */}
      <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
    </div>
  );
};

export default Sidebar;

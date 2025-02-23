import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Settings from "./components/Settings";
import Chatbot from "./components/Chatbot";
import BudgetForecast from "./components/BudgetForecast";
import Roadmap from "./components/Roadmap"; // ✅ Updated Import

function App() {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar toggleChatbot={toggleChatbot} />

        <div className="content" style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/budget-forecast" element={<BudgetForecast />} />
            <Route path="/roadmap" element={<Roadmap />} /> {/* ✅ Updated Route */}
          </Routes>
        </div>

        {/* Chatbot Fixed at Bottom-Right */}
        <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
      </div>
    </Router>
  );
}

export default App;

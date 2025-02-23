import React, { useState } from "react";
import "./Chatbot.css";
import { FaTimes, FaExpandAlt, FaCommentDots, FaTrash } from "react-icons/fa";

const Chatbot = ({ isOpen, toggleChatbot }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you? 😊" }
  ]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const responses = {
      "hi":"Hello",
      "thanks":"You're welcome",
      "saving money": "Here are some tips: Track expenses, set a budget, and avoid unnecessary spending! 💰",
      "budgeting tips": "Budgeting helps! Allocate funds for needs, wants, and savings. Use the 50-30-20 rule. 📊",
      "invest": "Investing helps grow your money! Consider stocks, mutual funds, or real estate. 📈",
      "reduce expenses": "Cut down on non-essential spending and look for discounts. 💡",
      "debt management": "Pay off high-interest debt first and avoid unnecessary loans. 🚀",
    };

    let responseText = responses[input.toLowerCase()] || "I'm still learning! Can you rephrase your question? 🤖";

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: responseText }]);
    }, 1000);

    setInput(""); // Clear input field
  };

  const handleClearChat = () => {
    setMessages([{ sender: "bot", text: "Chat cleared! How can I help?" }]);
  };

  return (
    <>
      {/* Chatbot Floating Icon */}
      {!isOpen && (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          <FaCommentDots />
        </button>
      )}

      {/* Chatbot Container */}
      <div className={`chatbot-container ${isOpen ? "open" : "closed"} ${isExpanded ? "expanded" : ""}`}>
        <div className="chatbot-header">
          <h3>Chatbot</h3>
          <div className="chatbot-controls">
            <button onClick={handleClearChat} className="clear-btn"><FaTrash /></button>
            <button onClick={() => setIsExpanded(!isExpanded)} className="expand-btn"><FaExpandAlt /></button>
            <button onClick={toggleChatbot} className="close-btn"><FaTimes /></button>
          </div>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        
        <div className="chatbot-input">
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} 
          />
          <button onClick={handleSendMessage}>➤</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;

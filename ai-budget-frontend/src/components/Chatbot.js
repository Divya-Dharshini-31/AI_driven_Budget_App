import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = ({ isOpen, toggleChatbot }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you?" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    // Always respond with "Where do you need help specifically?"
    setTimeout(() => {
      const botResponse = { sender: "bot", text: "Where do you need help specifically?" };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : "closed"}`}>
      <div className="chatbot-header">
        <h3>Chatbot</h3>
        <button onClick={toggleChatbot} className="close-btn">✖</button>
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
        />
        <button onClick={handleSendMessage}>➤</button>
      </div>
    </div>
  );
};

export default Chatbot;

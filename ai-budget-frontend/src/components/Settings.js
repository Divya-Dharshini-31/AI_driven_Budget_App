import React, { useState } from "react";
import "./Settings.css";
import { FaUser, FaBell, FaLock, FaPalette, FaSignOutAlt } from "react-icons/fa";

const Settings = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="settings">
      <h1 className="title">Settings ⚙️</h1>

      {/* Account Settings */}
      <div className="setting-option" onClick={() => toggleSection("account")}>
        <FaUser className="icon" />
        <span>Account Settings</span>
      </div>
      {openSection === "account" && (
        <div className="setting-details">
          <p>Change Name, Email, and Profile Picture</p>
        </div>
      )}

      {/* Notifications */}
      <div className="setting-option" onClick={() => toggleSection("notifications")}>
        <FaBell className="icon" />
        <span>Notifications</span>
      </div>
      {openSection === "notifications" && (
        <div className="setting-details">
          <label>
            <input type="checkbox" /> Enable Notifications
          </label>
          <label>
            <input type="checkbox" /> Email Alerts
          </label>
        </div>
      )}

      {/* Privacy & Security */}
      <div className="setting-option" onClick={() => toggleSection("privacy")}>
        <FaLock className="icon" />
        <span>Privacy & Security</span>
      </div>
      {openSection === "privacy" && (
        <div className="setting-details">
          <label>
            <input type="checkbox" /> Enable 2FA
          </label>
          <label>
            <input type="checkbox" /> Hide Profile from Search
          </label>
        </div>
      )}

      {/* Theme Selection */}
      <div className="setting-option" onClick={() => toggleSection("theme")}>
        <FaPalette className="icon" />
        <span>Theme</span>
      </div>
      {openSection === "theme" && (
        <div className="setting-details">
          <select className="theme-selector">
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>
      )}

      {/* Logout */}
      <div className="setting-option logout">
        <FaSignOutAlt className="icon logout-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Settings;

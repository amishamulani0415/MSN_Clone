import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div>
            <h2>Dashboard</h2>
            <p>Welcome to the MSN Clone admin panel.</p>
            <p>You can manage content and monitor system activity here.</p>
          </div>
        );
      case "news":
        return (
          <div>
            <h2>Manage News</h2>
            <p>This is where you can create, edit, or delete news articles.</p>
            {/* Optional: include a form or table here */}
          </div>
        );
      case "settings":
        return (
          <div>
            <h2>Settings</h2>
            <p>Customize your admin settings here — like updating your password or email.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-4" style={{ width: "250px", minHeight: "100vh" }}>
        <h4 className="mb-4">Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <button className={`nav-link text-white btn btn-link ${activeTab === "dashboard" ? "fw-bold" : ""}`} onClick={() => setActiveTab("dashboard")}>
              Dashboard
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className={`nav-link text-white btn btn-link ${activeTab === "news" ? "fw-bold" : ""}`} onClick={() => setActiveTab("news")}>
              Manage News
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className={`nav-link text-white btn btn-link ${activeTab === "settings" ? "fw-bold" : ""}`} onClick={() => setActiveTab("settings")}>
              Settings
            </button>
          </li>
        </ul>
        <button onClick={handleLogout} className="btn btn-danger mt-4">Logout</button>
      </div>

      {/* Main Content Area */}
      <div className="p-4" style={{ flex: 1 }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;

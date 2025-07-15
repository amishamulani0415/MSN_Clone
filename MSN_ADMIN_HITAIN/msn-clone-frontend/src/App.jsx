import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import About from "./Pages/About";

import Login from "./Pages/Admin/Login";
import AdminLayout from "./Pages/Admin/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import ManageNews from "./Pages/Admin/ManageNews";
import Settings from "./Pages/Admin/Settings";
import ForgotPassword from "./Pages/Admin/ForgotPassword";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:name" element={<Categories />} /> {/* ✅ Fixes dynamic category routing */}
          <Route path="/about" element={<About />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin/manage-news" element={<AdminLayout><ManageNews /></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><Settings /></AdminLayout>} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





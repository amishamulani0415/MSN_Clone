import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("adminLoggedIn") === "true";

  const categories = ["Technology", "Business", "Sports", "Health", "Entertainment"];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) navigate(`/search?q=${query}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  };

  const goToCategory = (category) => {
    navigate(`/categories/${category.toLowerCase()}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Logo" width="36" height="36" />
          <span className="fs-5">NewsPortal</span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>

            {/* 🔽 Dropdown for Categories */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Categories
              </span>
              <ul className="dropdown-menu">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button className="dropdown-item" onClick={() => goToCategory(cat)}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About
              </NavLink>
            </li>
          </ul>

          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" name="search" placeholder="Search news..." />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>

          {isAdmin ? (
            <>
              <NavLink className="btn btn-light me-2" to="/admin/dashboard">Dashboard</NavLink>
              <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
            </>
          ) : (
            <NavLink className="btn btn-light" to="/admin">Admin Panel</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// Navbar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <img
            src="/mns_logo.png"
            alt="MSN Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          MSN 
        </NavLink>

        {/* Hamburger toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/categories">
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/about">
                About
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search news..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

          {/* Admin Panel / Login */}
          <NavLink className="btn btn-light" to="/admin">
            Admin Panel
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


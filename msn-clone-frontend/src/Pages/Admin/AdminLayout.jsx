import React from 'react';
import { NavLink } from 'react-router-dom';


const AdminLayout = ({ children }) => {
  return (
    <div className="row">
      <div className="col-md-3 bg-light p-3">
        <h4 className="mb-4">🛠 Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/manage-news" className="nav-link">Manage News</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/settings" className="nav-link">Settings</NavLink>
          </li>
        </ul>
      </div>
      <div className="col-md-9">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

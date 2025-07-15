import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    captcha: '',
  });
  const [msg, setMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');

    try {
      const res = await axios.post('http://localhost:8080/api/admin/login', form);
      setMsg(res.data.msg);
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="container mt-5 col-md-4 offset-md-4">
      <h3 className="mb-3 text-center">🔐 Admin Login</h3>
      <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Captcha (enter 1234)</label>
          <input
            type="text"
            name="captcha"
            className="form-control"
            placeholder="Enter captcha"
            value={form.captcha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <div className="mt-3 text-center">
          <a href="/admin/forgot-password" className="text-decoration-none">Forgot Password?</a>
        </div>

        {msg && <p className="mt-3 text-danger text-center">{msg}</p>}
      </form>
    </div>
  );
};

export default Login;

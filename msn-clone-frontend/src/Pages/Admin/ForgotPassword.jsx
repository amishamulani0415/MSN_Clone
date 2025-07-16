import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/admin/forgot-password", { email });
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Failed to reset password");
    }
  };

  return (
    <div className="col-md-4 offset-md-4 mt-5">
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary w-100">Reset Password</button>
      </form>
      <p className="mt-3 text-success">{msg}</p>
    </div>
  );
};

export default ForgotPassword;


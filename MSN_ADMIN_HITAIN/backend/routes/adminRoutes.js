const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// ✅ Admin Login
router.post("/login", async (req, res) => {
  const { username, password, captcha } = req.body;

  if (captcha !== "1234") {
    return res.status(400).json({ msg: "Invalid captcha" });
  }

  try {
    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    res.json({ msg: "Login successful", admin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ Forgot Password - Generate New Password & Send via Email
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    // Generate random 8-character password
    const newPassword = crypto.randomBytes(4).toString("hex");
    admin.password = newPassword;
    await admin.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "News Admin - Password Reset",
      text: `Hi ${admin.username},\n\nYour new password is: ${newPassword}\n\nPlease login and change it later.`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ msg: "New password sent to your email." });
  } catch (err) {
    console.error("❌ Forgot Password Error:", err);
    res.status(500).json({ msg: "Email sending failed" });
  }
});

module.exports = router;




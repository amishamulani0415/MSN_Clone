const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config({ path: "./config.env" });

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Admin.deleteMany(); // remove old admins (optional)
    await Admin.create({
      username: "admin",
      password: "admin123",
      email: "admin@example.com",
    });
    console.log("✅ Admin seeded");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  });



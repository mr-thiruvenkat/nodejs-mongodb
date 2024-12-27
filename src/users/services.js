const express = require("express");
const User = require("./models");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/login", async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = user.password === password;
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

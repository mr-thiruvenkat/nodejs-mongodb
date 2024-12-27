const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  userid: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: String },
  gender: { type: String },
  mobile: { type: String, required: true },
  addressid: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", userSchema);

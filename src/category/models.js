const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const categorySchema = new mongoose.Schema({
  categoryid: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("category", categorySchema);

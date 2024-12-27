const mongoose = require("mongoose");
require("dotenv").config();
const status = require("../status/services");
const category = require("../category/masterdata");


const URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

function connectDb() {
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Datebase Server ==> ", URI);
      
      /** Insert Status  */
      status();
      /** Insert Category  */
      category();
    })
    .catch((err) => console.error("MongoDB connection error:", err));
}

module.exports = connectDb;

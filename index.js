const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const databaseConnection = require("./src/common/dbConnection");
const userApi = require("./src/users/services");
const categoryApi = require("./src/category/services");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running!");
});

/** */
databaseConnection();
app.use("/api/user", userApi);
app.use("/api/category", categoryApi);
/** */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log();
  console.log();
  console.log("*************************************");
  console.log(`****|  DreamShoppy has Started  |****`);
  console.log("*************************************");
  console.log();
});

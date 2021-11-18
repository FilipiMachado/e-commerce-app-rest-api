// Express
const express = require("express");
const app = express();
// MongoDB
const mongoose = require("mongoose");
// Dotenv
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBConnection ta bagual!");
  })
  .catch(() => {
    console.log("Deu ruim!");
  });

app.listen(5000, () => {
  console.log("Server Backend bombando!");
});

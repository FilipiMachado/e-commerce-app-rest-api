// Express
const express = require("express");
const app = express();
// MongoDB
const mongoose = require("mongoose");
// Dotenv Config
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

  app.get("/api/test", (req, res) => {
      console.log("Test is successful!");
  })

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Backend bombando!");
});

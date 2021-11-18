// Express
const express = require("express");
const app = express();
// MongoDB
const mongoose = require("mongoose");
// Dotenv Config
const dotenv = require("dotenv");
// Routes
const userRoute = require("./routes/user.jsx");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBConnection ta bagual!");
  })
  .catch(() => {
    console.log("Deu ruim!");
  });

// User Routes
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Backend bombando!");
});

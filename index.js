// Express
const express = require("express");
const app = express();
// MongoDB
const mongoose = require("mongoose");
// Dotenv Config
const dotenv = require("dotenv");
// Routes
const userRoute = require("./routes/user");

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
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("Server Backend bombando!");
});
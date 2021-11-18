// Express
const express = require("express");
const app = express();
// MongoDB
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://fil:123654@e-commerce-api.pub8n.mongodb.net/shop?retryWrites=true&w=majority"
);

app.listen(5000, () => {
  console.log("Server Backend bombando!");
});

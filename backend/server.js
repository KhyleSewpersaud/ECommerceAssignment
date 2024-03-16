const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Successful");
});

const port = process.env.PORT || 4000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Form = require("./Model/Form");

const PORT = 4300;
require("dotenv").config();
require("./db");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("HPSV Studio website is working");
});

app.post("/forms", (req, res) => {
  const { name, email, phone, message } = req.body;

  const newForm = new Form({
    name,
    email,
    phone,
    message,
  });

  newForm
    .save()
    .then(() =>
      res.status(201).json({ message: "Form data saved successfully" })
    )
    .catch((err) => {
      console.error("Error saving form data:", err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

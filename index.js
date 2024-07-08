require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Phrases = require("./models/phrase.model.js");

const phraseRoute = require("./routes/phrase.route.js");
// framework to handle the requests
const app = express();

// middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/phrases", phraseRoute);

app.get("/", (req, res) => {
  res.send("Hellooo");
});

// Connection to mongo DB and the server setup on port 3000
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });

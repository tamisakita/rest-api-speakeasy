require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Phrases = require("./models/phrase.model.js");

const airportPhrasesRoute = require("./routes/airportphrase.route.js");
// framework to handle the requests
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/airport", airportPhrasesRoute);

app.get("/", (req, res) => {
  res.send("Hellooo GET dddd");
});

// Connection to mongo DB and running the server on port 3000
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });

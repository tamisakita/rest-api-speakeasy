const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Hellooo GET dddd");
});

mongoose
  .connect(
    "mongodb+srv://admin:P2PMjl5G7kmQ3clg@backenddb.8smahvb.mongodb.net/SpeakEasy-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });

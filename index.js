require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Phrases = require("./models/phrase.model.js");

// framework to handle the requests
const app = express();

// make the return into json format
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellooo GET dddd");
});

// retrieve all phrases
app.get("/api/phrases", async (req, res) => {
  try {
    const phrases = await Phrases.find({});
    res.status(200).json(phrases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve only one phrase
app.get("/api/phrase/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const phrase = await Phrases.findById(id);
    res.status(200).json(phrase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Insert a Phrase
app.post("/api/phrases", async (req, res) => {
  try {
    const phrases = await Phrases.create(req.body);
    res.status(200).json(phrases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update phrase
app.put("/api/phrase/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const phrase = Phrases.findByIdAndUpdate(id, req.body);

    // verifying if the phrase exist
    if (!phrase) {
      return res.status(404).json({ message: "Phrase not found" });
    }

    // search the phrase by Id again just to make sure it was updated
    const updatedPhrase = await Phrases.findById(id);

    res.status(200).json(updatedPhrase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a Phrase
app.delete("/api/phrase/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const phrase = await Phrases.findByIdAndDelete(id);

    if (!phrase) {
      return res.status(404).json({ message: "Phrase not found" });
    }

    res.status(200).json({ message: "Phrase deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

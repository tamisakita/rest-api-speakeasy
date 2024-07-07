const express = require("express");
const Phrases = require("../models/phrase.model");

const router = express.Router();
const {
  getAirportPhrases,
  getAirportPhraseById,
  createAirportPhrase,
  updateAiportPhrase,
  deleteAirportPhrase,
} = require("../controllers/airportphrase.controller");

router.get("/", getAirportPhrases);

router.get("/:id", getAirportPhraseById);

router.post("/", createAirportPhrase);

router.put("/:id", updateAiportPhrase);

router.delete("/:id", deleteAirportPhrase);

module.exports = router;

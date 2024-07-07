const express = require("express");
const Phrases = require("../models/phrase.model");

const router = express.Router();
const {
  getPhrasesByCategory,
  getPhraseById,
  createPhrase,
  updatePhrase,
  deletePhrase,
} = require("../controllers/phrase.controller");

router.get("/", getPhrasesByCategory);

router.get("/:id", getPhraseById);

router.post("/", createPhrase);

router.put("/:id", updatePhrase);

router.delete("/:id", deletePhrase);

module.exports = router;

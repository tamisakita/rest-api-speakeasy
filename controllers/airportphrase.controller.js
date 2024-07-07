const Phrases = require("../models/phrase.model");

const getAirportPhrases = async (req, res) => {
  try {
    const phrases = await Phrases.find({});
    res.status(200).json(phrases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAirportPhraseById = async (req, res) => {
  try {
    const { id } = req.params;
    const phrase = await Phrases.findById(id);
    res.status(200).json(phrase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAirportPhrase = async (req, res) => {
  try {
    const phrases = await Phrases.create(req.body);
    res.status(200).json(phrases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAiportPhrase = async (req, res) => {
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
};

const deleteAirportPhrase = async (req, res) => {
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
};

module.exports = {
  getAirportPhrases,
  getAirportPhraseById,
  createAirportPhrase,
  updateAiportPhrase,
  deleteAirportPhrase,
};
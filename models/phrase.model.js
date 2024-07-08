const mongoose = require("mongoose");

const PhraseSchena = mongoose.Schema(
  {
    phrase: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    category: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Phrases = mongoose.model("Phrases", PhraseSchena);

module.exports = Phrases;

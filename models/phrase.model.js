const mongoose = require("mongoose");

const PhraseSchena = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true],
    },
    answer: {
      type: String,
      required: [true],
    },
  },

  {
    timestamps: true,
  }
);

const Phrase = mongoose.model("Phrase", PhraseSchena);

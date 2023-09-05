const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "Action",
        "Biography",
        "History",
        "Horror",
        "Kids",
        "Learning",
        "Sci-Fi",
        "Thriller",
        "War",
      ],
    },
    year: {
      type: Number,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 5,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);

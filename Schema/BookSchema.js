const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    genre: {
      type: String,
      enum: ["Fiction", "Science", "Comic"],
    },
    description: String,
    price: Number,
  },
  {
    versionKey: false,
  }
);

const bookModel = mongoose.model("Book", bookSchema);

module.exports = { bookModel };

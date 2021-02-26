const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookModel = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
  read: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("books", bookModel);

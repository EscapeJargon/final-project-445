const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  title: String,
  upvotes: Number,
  comments: [
    {
      author: String,
      text: String,
    },
  ],
  content: [String],
});

module.exports = mongoose.model("Article", articleSchema);

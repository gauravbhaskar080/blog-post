const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  dayTitle: String,
  title: String,
  content: String,
  imageURL: String, // Changed to store file path
  videoURL: String, // Changed to store file path
});

module.exports = mongoose.model("Post", PostSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  dayTitle:String,
  title: String,
  content: String,
  imageURL: String
});


module.exports = mongoose.model('Post',PostSchema);
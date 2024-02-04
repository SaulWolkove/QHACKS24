const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  measurement: String,
  expiration: String,
  username: String,
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;

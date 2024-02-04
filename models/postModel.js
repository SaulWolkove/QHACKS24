const mongoose = require("mongoose");
// this will change when i get it to work. booya
const postSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  measurement: String,
  expiration: String,
  username: String,
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;

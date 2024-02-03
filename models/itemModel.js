const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
  product: String,
  quantity: String,
  expiration: String,
  group: String,
  username: String,
  user_queued: String,
});

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel
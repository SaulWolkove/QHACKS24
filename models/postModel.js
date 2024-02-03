const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    username: String
})

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel
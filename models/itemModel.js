const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    expiration: String,
    username: String
})

const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel
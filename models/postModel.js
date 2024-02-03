const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    expiration: String,
    username: String
})

const itemModel = mongoose.model("Post", postSchema);

module.exports = itemModel
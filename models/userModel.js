const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    accountType: String,
    name: String,
    corp: String,
    location: String
})

const userModel = mongoose.model("users", userSchema, "users");

module.exports = userModel;
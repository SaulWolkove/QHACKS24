const postModel = require("../models/postModel")

module.exports = async (req, res) =>{
    const {product}=req.body
    const {quantity}=req.body
    const {username}=req.body
    const {expiration}=req.body

    const post = new postModel({
        product,
        quantity,
        username,
        expiration
    })
    const newPost = await post.save();
    res.json(newPost);
}
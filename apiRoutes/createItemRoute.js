const itemModel = require("../models/itemModel")

module.exports = async (req, res) =>{
    const {product}=req.body
    const {quantity}=req.body
    const {username}=req.body
    const item = new itemModel({
        product,
        quantity,
        username
    })
    const newItem = await item.save();
    res.json(newItem);
}
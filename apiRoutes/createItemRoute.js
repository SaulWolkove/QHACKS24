const itemModel = require("../models/itemModel")

module.exports = async (req, res) =>{
    const {product}=req.body
    const {quantity}=req.body
    const {username}=req.body
    const {group} = req.body
    const user_queued = ""
    const {measurement} = req.body
    const {expiration} = req.body
    const item = new itemModel({
        product,
        quantity,
        username,
        group,
        user_queued,
        expiration,
        measurement,
    })
    const newItem = await item.save();
    res.json(newItem);
}
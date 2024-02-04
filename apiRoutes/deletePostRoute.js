const ItemModel = require("../models/itemModel")

module.exports = async (req,res)=>{
    const username= req.query.username
    const items = await ItemModel.find({username: username});
    console.log(username);
    res.json(items);
}
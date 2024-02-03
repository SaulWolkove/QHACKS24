const ItemModel = require("../models/itemModel")

module.exports = async (req,res)=>{
    const {id} = req.params;
    const item = await ItemModel.findById(id);
    item.user_queued = req.body.user_queued;
    await item.save();
    res.json(item);
}
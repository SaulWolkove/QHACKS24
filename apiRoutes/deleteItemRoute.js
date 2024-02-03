const ItemModel = require("../models/itemModel")

module.exports = async (req,res)=>{
    const {id} = req.params;
    const item = await ItemModel.findById(id);
    await item.deleteOne();
    res.status(204).json(item);
}
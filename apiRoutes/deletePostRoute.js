const PostModel = require("../models/itemModel")

module.exports = async (req,res)=>{
    const {id} = req.params;
    const item = await PostModel.findById(id);
    await item.deleteOne();
    res.status(204).json(item);
}
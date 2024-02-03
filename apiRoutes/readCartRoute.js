const ItemModel = require("../models/itemModel")

module.exports = async (req,res)=>{
    const user_queue= req.query.user_queue
    const items = await ItemModel.find({user_queued: user_queue});
    console.log(user_queue);
    res.json(items);
}
const PostModel = require("../models/itemModel")

module.exports = async (req,res)=>{
    const username= req.query.usernamequry
    const items = await PostModel.find();
    res.json(items);
}
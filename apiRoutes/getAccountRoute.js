const UserModel = require("../models/userModel")

module.exports = async (req,res)=>{
    const username= req.query.username
    const userData = await UserModel.find({username: username});
    res.json(user);
}
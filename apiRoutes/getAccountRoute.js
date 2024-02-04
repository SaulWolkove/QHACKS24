const UserModel = require("../models/userModel")

module.exports = async (req,res)=>{
    const username= req.query.username
    const userData = await UserModel.find({email: username});
    res.json(user);
}
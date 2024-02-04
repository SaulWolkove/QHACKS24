const UserModel = require("../models/userModel")

module.exports = async (req,res)=>{
    const username= req.params.id
    console.log(username)
    const userData = await UserModel.find({email: username});
    res.json(userData);
}
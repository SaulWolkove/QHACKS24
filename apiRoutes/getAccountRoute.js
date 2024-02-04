const UserModel = require("../models/userModel")

module.exports = async (req,res)=>{
    const username= req.query.id
    console.log(req.query)
    const userData = await UserModel.find({email: username});
    res.json(userData);
}
const userModel = require("../models/userModel")

module.exports = async (req, res) =>{
    const {email}=req.body
    const {name}=req.body
    const {accountType}=req.body
    const corp=""
    const location=""
    const user = new userModel({
       email,accountType,name,corp,location
    })
    const newUser = await user.save();
    res.json(newUser);
}
const UserModel = require("../models/userModel")

module.exports = async (req,res)=>{
    const {id} = req.params;
    const user = await UserModel.findById(id);
    user.accountType= req.body.accountType;
    user.corp= req.body.corp;
    user.location= req.body.location;

    await user.save();
    res.json(user);
}
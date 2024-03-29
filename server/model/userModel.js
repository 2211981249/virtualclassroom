const mongoose = require("mongoose");
const userModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:
    {
        type:String,
        required:true
    }
},
{
    timestamps:true
})

const userSchema = mongoose.model("User",userModel);
module.exports = userSchema;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
    password:{
        type: String,
        require:true
    }
},{timeStamps:true});

const userModel = mongoose.model("user",userSchema);

module.exports=userModel;
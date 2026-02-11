const mongoose = require("mongose");
const userModel = mongoose.model("user",userModel);
const userSchema = new mongoose.schema({
    username:{
        type:string,
        required:true
    },
    email:{
        type:string,
        require:true,
        unique:true
    },
    password:{
        type:string,
        require:true
    }
},{timeStamps:true});

module.exports=userModel;
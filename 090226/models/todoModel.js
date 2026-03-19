const mongoose = require ("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
},{timestamps:true})

const todoModel = mongoose.model("todos",todoSchema);
module.exports = todoModel;
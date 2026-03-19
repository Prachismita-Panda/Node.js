const todoModel = require ("../models/todoModel");



const addController = async(req,res)=>{

    const {title} = req.body;

    // validation

    if(!title){
        return res.status(500).send({
            success:false,
            message:"The textbox cannot be empty"
           
        })
    }

    const task = await todoModel({title});
    await task.save();
    return res.status(200).send({
        success:true,
        message:"Task is fulfilled",
        task
    })
       


}

const deleteController = async(req,res)=>{

    const {title} = req.body;

    // validation
     if(!title){
        return res.status(500).send({
            message:"The textbox cannot be empty",
            success:false
        })
    }
    const findTask=await todoModel.findOne({title});
    if(!findTask){
        return res.status(500).send({
            success:false,
            message:"Task not found"
        })
    }
    await todoModel.findOneAndDelete({title});
    return res.status(200).send({
        success:true,
        message:"Task Deleted Successfully"
    })
       


}

const updateController = async(req,res)=>{

    const {title} = req.body;

    // validation
    if(!title){
        return res.status(500).send({
            message:"The textbox cannot be empty",
            success:false
        })
    }
    const task=await todoModel.findOne({title});
    if(!task){
        return res.status(500).send({
            success:false,
            message:"Task not found"
        })
    }
    await todoModel.findOneAndUpdate({title},{title:newTitle})
    return res.status(200).send({
        success:true
    })
       


}

module.exports = {addController,deleteController,updateController};
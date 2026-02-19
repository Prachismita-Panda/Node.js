const userModel = require("../models/userModel");
const registerController = async(req,res)=>{
    try{

        const {username,email,password} = req.body;

        //validation
        if(!email || !password || !username){
            return(
                res.status(200).send({
                    success:false,
                    message:"All fields are compulsory"
                })
            )
        }

        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return(
                res.status(500).send({
                    success:false,
                    message:"User already registered"
                })
            )
        }

        const newUser = await userModel({username,email,password});
        newUser.save();
        res.status(200).send({
            success:true,
            message:"Record added successfully",
            newUser
        })


    }catch(error){
        res.status(500).send({
            status:false,
            message:"Register API",
            error
        })
    }
}

const loginController = async(req,res) =>{

    try{
        const {email,username,password} = req.body;

        // validation
        if(!email || !password){

            return res.status(500).send({
                success:false,
                message:"All fields are compulsory"
            })

        } 

        const existingUser = await userModel.findOne({email,password});

        if(!existingUser){
            return res.status(500).status({
                success:false,
                message:"invalid Credentials"
            })
        }

        res.status(200).send({
            success:true,
            message:"Login Successfull",
            user:{
                username:existingUser.username,
                email:exist.email
            }
           
        })

    }catch(error){
        res.status(500).send({
                status:false,
                mesage:"Login API",
                error
            })
    }
}

module.exports = {registerController,loginController} ;
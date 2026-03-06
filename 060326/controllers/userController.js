const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const registerController = async(req,res)=>{

    try{

        const {username,email,password} = req.body;


        //validation
        if(!username || !email || !password){
            return(
               res.status(500).send({
                status:false,
                message:"All fields are required"
               }) 
            )
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.status(500).send({
                status:false,
                message:"User already exists"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.salt)


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

const loginController = async (req,res)=>{
    try{

        const{email,password} = req.body;


        //validation
        if(!email || !password){
            return res.status(500).send({
                status:false,
                message:"All fields are required"
            })
        } 

        const existingUser = await userModel.findOne({email});

        if(!existingUser){
            return res.status(500).send({
                success:false,
                message:"Invalid credentials"
            })
        }

        const result = await bcrypt.compare(password,existingUser.password)
        console.log(result);

        if(!result){
            return(
                res.status(500).send({
                    success:fale,
                    message:"Invalid Credentials"
                })
            )
        }
        res.status(200).send({
            success:true,
            message:"Login Successful",
            existingUser
        })

    }catch(error){
        res.status(500).send({
            status:false,
            message:"Login API",
            error
        })
    }
}

module.exports = {registerController,loginController};
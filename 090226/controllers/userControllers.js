const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const registerController = async(req,res) =>{
   
    try {
         const{username,email,password} = req.body;

        //validation
        if(!username || !email ||  !password){
            return(
                res.status(500).send({
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
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);

        const newUser = await userModel({username,email,password:hashedpassword});

        newUser.save();
        res.status(200).send({
            success:true,
            message:"Record added successfully",
            newUser
        });
    } catch (error) {
         res.status(500).send({
            status:false,
            message:"register API",
            error
        })
    }
}

//login | post
const loginController = async(req,res)=>{
    try{
        const {email,password} = req.body;

        console.log(email);
        console.log(password);

        //validation

        if(!email || !password){
            return res.status(500).send({
                success:false,
                message:"All fields are compulsory"
            });
        }

        const existingUser=await userModel.findOne({email});

        if(!existingUser){
            return res.status(500).send({
                success:false,
                message:"Invalid  Credentials"
            });
        }

        const result = await bcrypt.compare(password,existingUser.password)
        console.log(result)
        if(!result){
            return(
                
                res.status(500).send({
                success:false,
                message:"Invalid Credentials"
                })
            )
              
        }
        const token = await JWT.sign({id:existingUser._id},process.env.JWT_SECRET,
        {expiresIn:"1d"});
        res.status(200).send({
            success:true,
            message:"Login Successfull" ,
            user:{
                username:existingUser.username,
                email: existingUser.email,
                token
            }
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
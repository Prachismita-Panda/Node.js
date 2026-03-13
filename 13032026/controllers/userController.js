const userModel = require ('../model/userModel');
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken"); 

const registerController = async(req,res) => {

    try {

        const {username,email,password} = req.body;

        console.log(req.body);
        // validation
        if(!username || !email || !password){
            return res.status(500).send({
                status:"false",
                message:"All fields are compulsory"

            })
        }  

        const existingUser = await userModel.findOne({email}); 

        if(existingUser){
            return res.status(500).send({
                status:"False",
                message:"User already exists"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await userModel({username,email,password:hashedPassword});

        await  newUser.save();
        res.status(200).send({
                status:"Success",
                message:"Record  added successfully",
                newUser
        })
        
       
        
    } catch (error) {
        
        return res.status(500).send({
            status:"False",
            message:"register API",
            error
        })
    }
    
}

const loginController = async(req,res) =>{
   
    try {

         const {email,password } = req.body
        if(!email || !password){
            return res.status(500).send({
                status:"False",
                message:"All fields are required"
            })
        }

        const existingUser=await userModel.findOne({email});

        if(!existingUser){
            return res.status(500).send({
                status:"False",
                message:"Invalid credentials"
            })
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
            message:"Login Successful" ,
            user:{
                username:existingUser.username,
                email: existingUser.email,
                token
            }
        })
    } catch (error) {
        return res.status(500).send({
            status:"False",
            message:"Error",
            error
        })
    }
}

module.exports = {registerController,loginController}
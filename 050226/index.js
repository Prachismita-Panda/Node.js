const express = require ("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
connectDB();
app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})
  
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})
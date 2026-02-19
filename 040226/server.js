const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv");
const app = express();
connectDb();
dotenv.config();
app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
     console.log(`Server running at port ${PORT}`);
});
   
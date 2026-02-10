const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");


//config
dotenv.config();


//db config
const app = express();
connectDB();

//middleware
app.use(morgan("dev"));
app.use(cors());

app.get("/test",(req,res)=>{
    res.status(200).send("Welcome to test route");
})

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(   `Server started at port ${PORT} in ${process.env.DEV_MODE} mode`);
})

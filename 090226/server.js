const express = require ("express");
const dotenv = require("dotenv"); 
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");


//config
dotenv.config();

//db config
connectDB();
const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors());
 

//routes
app.get("/test",(req,res) => {
    res.status(200).send("Welcome to Node server");
})



const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT} on ${process.DEV_MODE} mode`);
})
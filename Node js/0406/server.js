const express = require ("express");
const dotenv = require ("dotenv");
const colors = require ("colors");
//cofig
dotenv.config();
//rest object
const app = express();
//route
app.get("/test",(req,res) => {
    res.status(200).send("<h1>Welcome to Node server</h1>");
});
//port
const PORT = process.env.PORT
//listen
app.listen(PORT,()=>{ 
    console.log(`Server is running in ${process.env.DEV_MODE} mode at port ${PORT}`.bgBlue);
});

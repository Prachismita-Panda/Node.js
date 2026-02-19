const express = require("express");
const dotenv = require ("dotenv");
const route = require ("./routes/testRoute"); 
//config
dotenv.config();
//rest object
const app = express();

//route
app.use("/api/v1",require("./routes/testRoute"));


//PORT
const PORT = process.env.PORT || 4000;

//listen
app.listen(PORT,()=>{
    console.log(` server is running  in ${process.env.DEV_MODE} mode at PORT ${PORT}`);
})
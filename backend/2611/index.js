const express = require ("express");
const mySqlPool = require("./config/db");
const router = require("./routes/studentRoute");
const app = express();

const PORT = 8000;
mySqlPool.query("SELECT 1").then(()=>{
    console.log("db connected");
}).catch((error)=>{
    console.log(error);
})

app.use("/api/v1/student",router);

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})
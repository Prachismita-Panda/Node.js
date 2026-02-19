const express = require ("express");
const mySqlPool = require("./config/db");

const app = express();

const PORT = 8000;
mySqlPool.query("SELECT 1").then(()=>{
    console.log("db connected");
}).catch((error)=>{
    console.log(error)
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});
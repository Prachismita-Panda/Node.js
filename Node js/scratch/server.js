 import express from "express";
 const server = express();

 server.get ("/" , (req,res) => {
    console.log("Home route");
 })

 server.listen(3000,() =>{
    console.log("Server is running at port 3000");
 })

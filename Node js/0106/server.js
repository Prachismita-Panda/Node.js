import express from "express";
const server = express();

server.get ("/" ,(req,res) => {
    console.log("Home route");
});

server.get ("/home" , (req,res) => {
    res.send("home page");
});

server.listen(3000,() => {
    console.log("server is running at PORT 3000");
});


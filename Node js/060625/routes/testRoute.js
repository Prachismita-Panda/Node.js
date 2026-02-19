const express = require("express");

//route object
const route = express.Router();

//route
route.get("/test",(req,res) =>{
    res.send("<h1>Welcome to my node Server</h1>")
});

//export
module.exports = route;
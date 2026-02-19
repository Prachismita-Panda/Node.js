const express = require("express");

//route object
const route = express.Router();

//route
route.get("",(req,res) => {
    res.send("<h1> Welcome to my node server</h1>")
});

//export
module.export = route;
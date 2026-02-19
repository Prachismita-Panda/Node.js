const express = require("express");

const route = express.Router();

route.get("/test",(req,res) => {
    res.send("<h1> Welcome to My node server </h1>");
});

module.exports = route ;
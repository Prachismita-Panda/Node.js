const express = require ("express");
const app = express();

app.get ("/",(req,res) => {
    res.send (" welcome to home page");
})

app.get ("/register", (req,res)=>{

    console.log(req.query);
    res.send("Welcome to register page.");
})

app.post ("/signup", (req,res)=>{

    console.log(req.query);
    res.send("Welcome to signup page.");
})


const PORT = 8000;

app.listen (PORT,() =>{
    console.log(` Server started at port ${PORT}`);
})
const express = require ("express");
const app = express();

app.use(express.json());

app.get ("/",(req,res) => {
    res.send (" Home Page");
})

app.post ("/", (req,res)=>{
    res.send("Welcome I am post route.");
})

app.post ("/register", (req,res)=>{

    console.log(req.body.userName);
    res.send("I am from register route");
})

const PORT = 8000;
app.listen (PORT,() =>{
    console.log(` Server started at port ${PORT}`);
})
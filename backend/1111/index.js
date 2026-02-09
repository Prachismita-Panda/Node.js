const express = require ("express");
const colors = require ("colors");
const morgan = require ("morgan");
const dotenv = require ("dotenv");
dotenv.config();
const app = express();

app.use(morgan('dev'));  

app.get ("/",(req,res)=>{
    res.send("Welcome to home page");
})

app.get ("/shop",(req,res)=>{
    res.send("Welcome to shop page");
})

app.get ("/blog",(req,res)=>{
    res.send("Welcome to blog page");
})

app.get ("/about",(req,res)=>{
    res.send("Welcome to about page");
})

app.get ("/contact",(req,res)=>{
    res.send("Welcome to contact page");
})

app.get ("/cart",(req,res)=>{
    res.send("Welcome to cart page");
})

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}.`.bgMagenta.rainbow);
})


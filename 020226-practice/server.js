const express = require ("express");
const app =express();
app.use(express.json());

app.get("/product",(req,res)=>{
    res.send("Welcome to product page");
});
app.post("/post",(req,res)=>{
 
    res.send("welcome to post page");
});
app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("I am from register route");
});

const PORT = 8000;

app.listen(PORT,function (){
    console.log(`Server started at port ${PORT}`);
});
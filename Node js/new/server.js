import express from"express";
const server = express();

server.get("/",(req,res) =>
{
    res.send("Home page");
});

server.get("/",(req,res) =>{
    console.log(req);
}); 

server.listen(3000,() => {
    console.log("server is running at PORT 3000");
});
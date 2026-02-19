const express =  require ("express");
const server = express();
const port = 3000;

server.use(express.json());

server.get("/" , (req,res) => {
    console.log(req.url)
    res.end("Home Route");
})

server.get("/about" , (req,res) => {
    console.log(req.url);
    res.end("About route");
   
})

server.post("/" ,( req,res) => {
    console.log(req.body);
    res.end();
})


server.listen(port, () => {
    console.log(`server is running at port ${port}`);
});



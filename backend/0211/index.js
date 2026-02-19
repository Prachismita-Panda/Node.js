const express = require ('express');
const app = express();


app.get ("/product",(req,res) => {
    res.send("Welcome to product page");
})

app.get ("/product/:id",(req,res) => {
    res.json({
        message: "Successful search",
        status : "ok",
        result: req.params.id

    });
});


const PORT = 8000;
app.listen(PORT,() => {
    console.log(`server started at port ${PORT}`);
})
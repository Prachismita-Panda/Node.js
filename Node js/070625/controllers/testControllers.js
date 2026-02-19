const testingRoute= (req,res) => {
    res.send ("<h1> Welcome to My node server</h1>");
}
const homeRoute= (req,res) => {
    res.send ("<h1> Home Page</h1>");
}

const shopRoute= (req,res) => {
    res.send ("<h1> Shop Page</h1>");
}
const blogRoute= (req,res) => {
    res.send ("<h1>Blog Page</h1>");
}
const aboutRoute= (req,res) => {
    res.send ("<h1> About Page</h1>");
}
const contactRoute= (req,res) => {
    res.send ("<h1> contact Page</h1>");
}
const cartRoute= (req,res) => {
    res.send ("<h1> Shop Page</h1>");
}

module.exports ={testingRoute, homeRoute,shopRoute,blogRoute,aboutRoute, contactRoute,cartRoute };

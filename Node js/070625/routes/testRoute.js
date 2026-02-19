const express = require ("express");
const route = express.Router();
const {testingRoute} = require("../controllers/testControllers");
const {homeRoute} = require("../controllers/testControllers");
const {shopRoute} = require("../controllers/testControllers");
const {blogRoute} = require("../controllers/testControllers");
const {aboutRoute} = require("../controllers/testControllers");
const {contactRoute} = require("../controllers/testControllers");
const {cartRoute} = require("../controllers/testControllers");


//route object
// const route = express.Router();

//route
route.get("/test",testingRoute);
route.get("/home",homeRoute);
route.get("/shop",shopRoute);
route.get("/blog",blogRoute);
route.get("/about",aboutRoute);
route.get("/contact",contactRoute);
route.get("/cart",cartRoute);

//test route


// route.get("/test",testingRoute);

//export
module.exports = route;
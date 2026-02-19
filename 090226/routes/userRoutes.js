const express = require("express");
const { registerController,loginController } = require("../controllers/userControllers");

const router = express.Router();


//Register | POST
router.post("/register",registerController);
router.post("/login",loginController);

//export
module.exports = router;
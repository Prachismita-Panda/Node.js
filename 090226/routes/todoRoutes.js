const express =require ("express");
const { addController, deleteController, updateController } = require("../controllers/todoController");
const router = express.Router();

router.post("/add",addController);
router.post("/delete",deleteController);
router.post("/update",updateController)

module.exports = router;
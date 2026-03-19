const express =require ("express");
const { addController, deleteController, updateController } = require("../controllers/todoController");
const router = express.Router();

router.post("/todo/add",addController);
router.post("/todo/delete",deleteController);
router.post("/todo/update",updateController)

module.exports = router;
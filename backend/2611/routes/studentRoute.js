const express = require("express");
const { getAllStudents } = require("../controllers/testController");
const db = require("../config/db");
const router = express.Router();
router.get("/getall", getAllStudents);
router.get("/searchByRoll/:rn", async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM student WHERE roll=${req.params.rn}`);
        console.log(data);
        
        if (!data[0].length) {
            res.send({
                success: false,
                message: "No record found",
                errorcode: 500,
                data: data[0]
            });
        }
        res.send({
            success: true,
            message: "All record found",
            errorcode: 200,
            data: data[0]
        });

    } catch (error) {
        res.send({
            success: false,
            message: "No record found",
            errorcode: 404,
            error
        });

    }
    console.log("Prachi");



});


module.exports = router;

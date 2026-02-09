const db = require("../config/db");
async function getAllEmployees(req,res){
    try {
       const data=await db.query("SELECT * FROM emp ");
        res.send({
            success:true,
            message:"All record found",
            errorcode:200,
            data:data[0]
        });  
    } catch (error) {
        res.send({
            success:false,
            message:"No record found",
            errorcode:404,
            error
        });
    }
    console.log("Prachi");
   

}

module.exports = {getAllEmployees};
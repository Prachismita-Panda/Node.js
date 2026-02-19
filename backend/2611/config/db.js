const mySql = require ('mysql2/promise');
const mySqlPool = mySql.createPool({
    
    host:"localhost",
    user:"root",
    password:"123456",
    database:"students_db"
    
})

module.exports = mySqlPool;
const mongoose = require ("mongoose");
const connectDB = async()=>{
        try {
            const conn = await mongoose.connect("mongodb+srv://prachismita:gee123456@cluster0.dovb05y.mongodb.net/");
            console.log("db connected successfully");
        } catch (error) {
            console.log("Unwanted error");
        }
}

module.exports=connectDB;
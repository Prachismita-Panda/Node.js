const mongoose = require ("mongoose");
const connectDB =async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connected successfully at ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`DB connection error ${error}`); 
    }
}

module.exports = connectDB;
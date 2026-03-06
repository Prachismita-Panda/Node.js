const express = require ("express");
const app = express();
const dotenv = require("dotenv");
const cors = require ("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");


dotenv.config();

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1",require("./routes/userRoute"));


const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT} at ${process.env.DEV_MODE}`);
})
const express = require ("express");
const dotenv = require("dotenv"); 
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/userRoutes");


//config
dotenv.config();

//db config
connectDB();
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
 
app.use("/api/v1",router)

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT} on ${process.env.DEV_MODE} mode`);
})
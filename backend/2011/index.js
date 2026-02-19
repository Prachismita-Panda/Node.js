const dotenv = require("dotenv");
const express = require ("express");
const morgan = require ("morgan");
const colors = require ("colors");
const router = require("./routes/testRoutes");
const app = express();
dotenv.config();

app.use(morgan('dev'));
app.get("/api/v1",router)

const PORT =process.env.port || 8000
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`.bgRed);
})
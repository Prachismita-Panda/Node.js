const express = require("express");
const dotenv = require("dotenv");

// config
dotenv.config();

// rest object
const app = express();

// middleware

const users = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "age": 29,
    "department": "Engineering",
    "email": "alice.johnson@example.com"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "age": 35,
    "department": "Marketing",
    "email": "bob.smith@example.com"
  },
  {
    "id": 3,
    "name": "Charlie Davis",
    "age": 42,
    "department": "Finance",
    "email": "charlie.davis@example.com"
  },
  {
    "id": 4,
    "name": "Diana Evans",
    "age": 31,
    "department": "Human Resources",
    "email": "diana.evans@example.com"
  },
  {
    "id": 5,
    "name": "Ethan Lee",
    "age": 26,
    "department": "Product",
    "email": "ethan.lee@example.com"
  }

]
app.use(express.json());

app.get("/users/:id",(req,res)=> {
  var temp = false;
  for(var i=0;i<users.length;i++){
    if(users[i].id == req.params.id){
      temp = true;
      break;
    }
  }
  if(temp == true){
    res.send(users[i]);
  }
  else{
    res.send("The id is not present.");
  }
    
    // res.send(users);  
});

// app.post("/",(req,res) => {
//     res.send(req.body.name);
    
// });

// PORT
const PORT = process.env.PORT || 4000;

// listen
app.listen(PORT,() =>{
    console.log(`server is running in ${process.env.DEV_MODE} mode at PORT ${PORT}`);
});
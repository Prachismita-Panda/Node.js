const express = require ("express");
const app = express();
app.use(express.json());

const student = require ("./Student.json");

app.get("/student",(req,res) =>{
    res.send(student);
})

app.get("/search/:rollno/:id",(req,res) => {
    const roll = req.params.rollno ;
    const id= Number(req.params.id);

    const student = student.find((s) => s.roll === roll && s.id === id);
    
    if(student){
        res.send(student);
    }
    else{
        res.send("Student not found");
    }
})

app.get("/filter",(req,res)=>{
    const name = req.query.name;
    const course = req.query.course;
    const result = student.filter(
        (s) => s.name === name && s.course === course
    );

    if(result.length > 0){
        res.send(result);
    }
    else{
        res.send("No student found with this name and course");
    }
});

const PORT =8000;
app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`);
})
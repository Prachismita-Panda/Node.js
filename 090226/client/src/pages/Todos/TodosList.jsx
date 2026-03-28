import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const TodosList = () => {
  

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);

   async function handleSubmit(e){

     
      try {
          e.preventDefault();
           const data = {title:todo}
            const res = await axios.post("http://localhost:8080/api/v1/todo/add", data);
            toast.success(res.data.message)
            console.log(res.data)
            setTodo(" ");
            setTodos([...todos],res.data.todo);
      } catch (error) {
            toast.error("Something went wrong");
            console.log(error)
      }
  }

  // async function showData(e){
  //    try {
  //         e.preventDefault();
  //         const data = {title:todo}
  //         const res = await axios.post("http://localhost:8080/api/v1/todo/add", data);
  //         toast.success(res.data.message)
  //         console.log(res.data) 
  //         setTodo(" ");
  //         setTodos([...todos],res.data.todo);
  //       } catch (error) {
  //         toast.error("Something went wrong");
  //         console.log(error)
  //       }
    
  // }


  return (
    <div>
      
      <h1>Todo list</h1>
      <div >
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type='submit' onClick={handleSubmit}>ADD</button>
        {/* <button type='submit' onClick={showData}>Show Todo</button> */}
      </div>

      { todos.map((item,index)=>{
          return <h1 key={index}>{item.title}</h1>
      })}
    </div>
  )
}

export default TodosList

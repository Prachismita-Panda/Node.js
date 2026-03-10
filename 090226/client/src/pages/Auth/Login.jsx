import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

       const [email,setMail] = useState();
       const [password,setPass] = useState();
   
   
        const showData = async ()=>
        {
  
            try {
                const data = { email, password}
                const res = await axios.post("http://localhost:8080/api/v1/login", data);
                toast.success(res.data.message)
                console.log(res.data) 
            }catch (error) {
                toast.error("Something went wrong");
                console.log(error)
            }
       }
   
       function clearData(){
          setMail("");
          setPass("");
       }
   
    
  return (
   
   
       <div className='login-container'>
           
           <div className='login-card'>
                <h1>Login Page</h1>
               <input type="email" value={email} placeholder='Enter Email'  onChange={(e)=>(setMail(e.target.value))} /> <br />
               <input type="password" value={password} placeholder='Enter Password' onChange={(e)=>(setPass(e.target.value))}/>    
               
                <h6>Don't have an account? <Link to="/register">Register</Link></h6> 

                <div className='btn-box'>
                    <button onClick={showData}>Login</button>
                    <button onClick={clearData}>Clear</button>    
                </div>
           </div>
   
         
   
       </div>
  )
}

export default Login

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import AuthServices from '../../services/AuthService';



const Register = () => {

    const [username,setName] = useState  ("");
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const navigate = useNavigate();

    
    
  
    const showData = async () =>{
        try {
            
            const data = {username, email, password}
            const res = await AuthServices.registerAuth(data)
            toast.success(res.data.message)
            console.log(res.data) 
            // navigate('/todo');
            navigate('/login')
            
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error)
        }
       
    }   

    function clearData(){
        setName("");
        setEmail("");
        setPass("");
    }

    

  return (


    <div className='container'>
        
        <div className='register-box'>
            <h1>Register Page</h1>
            <input type="name" value={username} placeholder='Enter User-name'  onChange={(e)=>(setName(e.target.value))} /><br />
            <input type="email" value={email} placeholder='Enter Email'  onChange={(e)=>(setEmail(e.target.value))} /> <br />
            <input type="password" value={password} placeholder='Enter password' onChange={(e)=>(setPass(e.target.value))}/>    
            
            
            <h6>Already have an account? <Link to="/login">Login</Link></h6>  

            <div  className='btn-group'>
                <button onClick={showData}>Register</button>
                <button onClick={clearData}>Clear</button>  

            </div>
        </div>

        

    </div>
        
  )
}

export default Register

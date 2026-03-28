import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom';
import './Login.css'
import {getErrorMessage} from '../../utils/ErrorMessage';
import AuthServices from '../../services/AuthService';

const Login = () => {

       const [email,setMail] = useState();
       const [password,setPass] = useState();
       const navigate = useNavigate();
   
   
        const showData = async ()=>
        {
  
            try {
                const data = { email, password}
                const res = await AuthServices.loginAuth(data)
                toast.success(res.data.message)
                localStorage.setItem("todoapp",JSON.stringify(res.data))
                console.log(res.data) 
                navigate('/'); 
            }catch (error) {
                
                let msg =  getErrorMessage(error);
                console.log(error)
                toast.error(msg);
                
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

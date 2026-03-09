import React, { useState } from 'react'
import './Login.css'

const Login = () => {

       const [mail,setMail] = useState();
       const [pass,setPass] = useState();
   
   
      function showData(){
           console.log(mail);
           console.log(pass); 
       }
   
       function clearData(){
          setMail("");
          setPass("");
       }
   
    
  return (
   
   
       <div className='login-container'>
           
           <div className='login-card'>
               <input type="email" value={mail} placeholder='email'  onChange={(e)=>(setMail(e.target.value))} /> <br />
               <input type="password" value={pass} placeholder='password' onChange={(e)=>(setPass(e.target.value))}/>    
               

                <div className='btn-box'>
                    <button onClick={showData}>Login</button>
                    <button onClick={clearData}>Clear</button>    
                </div>
           </div>
   
         
   
       </div>
  )
}

export default Login

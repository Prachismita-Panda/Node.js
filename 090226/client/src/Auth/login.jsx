import React, { useState } from 'react'

const Login = () => {
    const[mail,setMail] = useState("");
    const[pass,setPass] = useState("");
    
 
    function showData(){
         console.log(mail);
         console.log(pass);
    }
    function clearData(){
         setMail("");
         setName("");
         setPass("");
    }
    
   return (
    <div>
        <div>
            <input type="email" value={mail} placeholder='Email' onChange={(e)=>setMail(e.target.value)}/><br />
            <input type="password" value={pass} placeholder='Password' onChange={(e)=>setPass(e.target.value)}/><br />
           
        </div>
        <div>
           <button onClick={showData}>Register</button>
           <button onClick={clearData}>Login</button>
        </div>
         
    </div>
)}

export default Login

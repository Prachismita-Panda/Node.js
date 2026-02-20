import React, { useState } from 'react';
import Login from './login';

const Register = () => {
    const[mail,setMail] = useState("");
    const[name,setName] = useState("");
    const[pass,setPass] = useState("");

    function showData(){
        console.log(mail);
        console.log(name);
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
          <input type="name" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)}/><br />
          <input type="password" value={pass} placeholder='Password' onChange={(e)=>setPass(e.target.value)}/><br />
          <p>Already have an account ? Login</p>
        </div>
        <div>
          <button onClick={showData}>Register</button>
          <button onClick={clearData}>Login</button>
        </div>
        
    </div>
  )
}

export default Register
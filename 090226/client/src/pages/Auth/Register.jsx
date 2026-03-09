import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'

const Register = () => {

    const [username,setName] = useState("");
    const [email,setMail] = useState("");
    const [password,setPass] = useState("");


  
    const showData = async () =>{
        const data = {username, email, password}
        const res = await axios.post("http://localhost:8080/api/v1/register", data)
        console.log(res.data)
    }   

    function clearData(){
        setName("");
        setMail("");
        setPass("");
    }


  return (


    <div className='container'>
        
        <div className='register-box'>
            <input type="name" value={username} placeholder='user-name'  onChange={(e)=>(setName(e.target.value))} /><br />
            <input type="email" value={email} placeholder='email'  onChange={(e)=>(setMail(e.target.value))} /> <br />
            <input type="password" value={password} placeholder='password' onChange={(e)=>(setPass(e.target.value))}/>    
            

            <div  className='btn-group'>
                <button onClick={showData}>Register</button>
                <button onClick={clearData}>Clear</button>    
            </div>
        </div>

        

    </div>
        
  )
}

export default Register

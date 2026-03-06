import React, { useState } from 'react'

const Register = () => {

    const [name,setName] = useState();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();


    function showData(){
        console.log(name);
        console.log(mail);
        console.log(pass); 
    }

    function clearData(){
        setName("");
        setMail("");
        setPass("");
    }


  return (


    <div>
        
        <div>
            <input type="name" value={name} placeholder='user-name'  onChange={(e)=>(setName(e.target.value))} /><br />
            <input type="email" value={mail} placeholder='email'  onChange={(e)=>(setMail(e.target.value))} /> <br />
            <input type="password" value={pass} placeholder='password' onChange={(e)=>(setPass(e.target.value))}/>    
            
        </div>

        <div>
            <button onClick={showData}>Register</button>
            <button onClick={clearData}>Clear</button>    
        </div>

    </div>
        
  )
}

export default Register

import React, { useState } from 'react'

const Register = () => {

    const [username,setName] = useState("");
    const [email,setMail] = useState("");
    const [password,setPass] = useState("");

    function showData(){
        setName("username");
        setMail("email");
        setPass("password");
    }

    function clearData(){
        setName(" ");
        setMail(" ");
        setPass(" ");
    }

  return (
    <div>
      <div>
        <input type="text" value={email} placeholder='Enter Email'  />
      </div>
    </div>
  )
}

export default Register

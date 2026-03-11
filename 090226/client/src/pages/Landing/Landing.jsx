import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <div id='container'>

        <div id='reg-box'>

          <div className='text'>
            <h1>Effortless task management</h1>
            <p>Stay organize and productive with our powerful todo app. Manage your tasks,collaborate with your team, and  never miss a deadline.</p>
          </div>
          
          <div className='btn-container'>
            <button > <Link to='/register' className='normal'> Register</Link></button>
            <button > <Link to='/login' className='normal'> Login</Link></button>
          </div>
          
        </div>

        <div className='img'>
          <img src="./todo-list.png" alt="" />
        </div>

    </div>
    </>
  )
}

export default Landing

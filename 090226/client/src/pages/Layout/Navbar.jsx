import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'


const Navbar = () => {
  return (
    <div id='header'>
        <h1 >Welcome User</h1>
        <div>
            <ul id='navbar'>
                <li><Link to='/' className='active'>Home</Link></li>
                <li><Link to='/todo'>Todo List</Link></li>
                <li><Link to='/landing'><FontAwesomeIcon icon={faRightFromBracket} /></Link></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar

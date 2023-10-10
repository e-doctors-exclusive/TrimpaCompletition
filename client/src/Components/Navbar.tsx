import React from 'react'
import logo from "../Assets/Wordmark.png"
import "../styles/Navbar.css"
const Navbar=()=>{
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className='navigo'>
            <li>Flights</li>
            <li>Hotels</li>
            <li>Packages</li>
            <li>Sign in</li>
            <li className='Sign-up'>Sign up</li>
          </ul>
  
        </div>
    </div>
  )
}

export default Navbar
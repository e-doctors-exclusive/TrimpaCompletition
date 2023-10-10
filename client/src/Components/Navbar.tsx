import React from 'react'
import logo from "../Components/Logo"
import "../styles/Navbar.css"
import Logo from '../Components/Logo'
const Navbar=()=>{
  return (
    <div className='navbar'>
        <div className='logo'>
            <Logo />
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
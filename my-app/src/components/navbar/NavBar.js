import React from 'react'
import './Navbar.css'

let logo = 'Coffee House';

const NavBar = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <h4>{logo}</h4>
        </div>
        <ul>
          <li className='nav-links'><a href="/">Home</a></li>
          <li className='nav-links'><a href="/">About</a></li>
          <li className='nav-links'><a href="/">Menu</a></li>
          <li className='nav-links'><a href="/">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
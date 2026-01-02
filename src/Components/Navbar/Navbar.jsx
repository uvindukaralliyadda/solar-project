import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  /*closes the mob nav when clicked */

   const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className='navbar'>
      <a href='#'><img src={logo} alt="Lakwell Solar Logo" /></a>

      <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li><a href='#about' onClick={handleLinkClick}>About</a></li>
        <li><a href='#Whysolar' onClick={handleLinkClick}>Why Solar</a></li>
        <li><a href='#partner' onClick={handleLinkClick}>Partners</a></li>
        <li><a href='#leader' onClick={handleLinkClick}>Leadership</a></li>
        <li><a href='#testimonials' onClick={handleLinkClick}>Testimonials</a></li>
        <li><a href='#Process' onClick={handleLinkClick}>Process</a></li>
        <li className='btn1'><a href='#contact' onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

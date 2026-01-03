import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-details'>
        <article className='footer-card'>
            <img src={logo}/>
            <p>We are a professionally managed solar company supporting Sri Lanka’s shift to clean, reliable energy. Our focus is on careful planning, compliance, and delivering sustainable solutions for the long term.</p>
        </article>
        <article className='footer-card'>
            <h3>Quick Links</h3>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#Whysolar'>Why Solar</a></li>
                <li><a>Our Partners</a></li>
                <li><a href='#leader'>Leadership</a></li>
                <li><a href='#Process'>Our Process</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </article>
        <article className='footer-card'>
            <h3>Services</h3>
            <ul>
                <li><a>Feasibility Study</a></li>
                <li><a>Planning</a></li>
                <li><a>Implementation</a></li>
                <li><a>Maintainance</a></li>
            </ul>
        </article>
      </div>
      <hr/>
      <div className='devop-details'>
        <p>&copy; All Rights Reserved. Lakwell Energy (Pvt) Ltd</p>
        <p>Designed & Developed by <a href="https://www.karalliyaddaone.com/" target="_blank" rel="noopener noreferrer"><b>K1</b></a></p>
      </div>
    </div>
  )
}

export default Footer

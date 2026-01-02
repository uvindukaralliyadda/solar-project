import React from 'react'
import './Hero.css'
import comprofile from '../../assets/Lakwell Energy.pdf'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h2>Building a Sustainable Solar Future for Sri Lanka</h2>

        <p>
          Lakwell Energy (Pvt) Ltd is a Sri Lanka based solar company focused on structured planning,
          <br />
          efficient installation, and long-term solar solutions for residential, commercial, and industrial energy needs.
        </p>

        <a href={comprofile} download className='btn2'>
          Company Profile
        </a>

        <a href='#contact' className='btn1'>
          Contact
        </a>
      </div>
    </div>
  )
}

export default Hero

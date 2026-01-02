import React from 'react'
import './About.css'
import purpose from '../../assets/purpose.webp'
import approach from '../../assets/approach.webp'
import values from '../../assets/values.webp'

const About = () => {
  return (
    <div className='about' id='about'>
        <header>
      <h2>About the Company</h2>
      <p>We are a Sri Lanka-based solar company helping homeowners, businesses, and industries switch to clean, reliable solar power. Our solutions are tailored for domestic and commercial clients to ensure efficiency, cost savings, and long-term sustainability.</p>
      </header>

      <main className='about-cards'>
        <article className='about-articles'>
            <img src={purpose}/>
            <h3>Our Purpose</h3>
            <p>To provide households and businesses with high-quality solar solutions that reduce energy bills, increase energy independence, and promote sustainable living.</p>
        </article>
        <article className='about-articles'>
            <img src={approach}/>
            <h3>Our Approach</h3>
            <p>We assess each client’s energy requirements, site conditions, and budget to design a customized solar installation plan, whether it's for a rooftop system, industrial setup, or hybrid energy solution.</p>
        </article>
        <article className='about-articles'>
            <img src={values}/>
            <h3>Our Values</h3>
            <p>We prioritize reliability, transparency, and long-term performance, ensuring our clients receive energy systems that are safe, efficient, and built to last.</p>
        </article>
      </main>
    </div>
  )
}

export default About

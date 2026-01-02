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
      <p>We are a professionally managed renewable energy company established with the objective of supporting Sri Lanka’s transition towards clean and reliable solar power. Our approach emphasizes structured planning, regulatory compliance, and long-term sustainability.</p>
      </header>

      <main className='about-cards'>
        <article className='about-articles'>
            <img src={purpose}/>
            <h3>Our Purpose</h3>
            <p>To contribute to national energy security through responsible solar energy development.</p>
        </article>
        <article className='about-articles'>
            <img src={approach}/>
            <h3>Our Approach</h3>
            <p>We prioritize feasibility analysis, compliance, and strategic partnerships to ensure long-term viability.</p>
        </article>
        <article className='about-articles'>
            <img src={values}/>
            <h3>Our Values</h3>
            <p>Integrity, accountability, and commitment to sustainable infrastructure development.</p>
        </article>
      </main>
    </div>
  )
}

export default About

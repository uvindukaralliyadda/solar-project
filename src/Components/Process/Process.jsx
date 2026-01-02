import React from 'react'
import './Process.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'

const Process = () => {
  return (
    <div className='Process' id='Process'>
      <header className='process-head'>
        <h2>Our Process</h2>
        <p>We follow a structured and reliable process to ensure high-quality solar energy solutions.</p>
      </header>
      <main className='process-main'>
        <article className='process-article'>
          <div className='article-heading'>
            <img src={one} alt="Assessment Icon"/>
            <h3>Initial Discussion</h3>
          </div>
          <p>Understanding energy needs, site conditions, scope.</p>
        </article>
        <article className='process-article'>
          <div className='article-heading'>
            <img src={two} alt="Planning Icon"/>
            <h3>Feasibility Review</h3>
          </div>
          <p>Preliminary technical and regulatory checks.</p>
        </article>
        <article className='process-article'>
          <div className='article-heading'>
            <img src={three} alt="Installation Icon"/>
            <h3>Planning and Structuring</h3>
          </div>
          <p>Defining system design approach and installation coordination.</p>
        </article>
        <article className='process-article'>
          <div className='article-heading'>
            <img src={four} alt="Monitoring Icon"/>
            <h3>Implementation Readiness</h3>
          </div>
          <p>Preparation for installation through qualified partners.</p>
        </article>
        <article className='process-article'>
          <div className='article-heading'>
            <img src={five} alt="Monitoring Icon"/>
            <h3>Long-Term Oversight</h3>
          </div>
          <p>Focus on system performance, reliability, sustainability.</p>
        </article>
      </main>
    </div>
  )
}

export default Process

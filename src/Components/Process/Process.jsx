import React from 'react'
import './Process.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import {motion} from "framer-motion";

const Process = () => {
  return (
    <div className='Process' id='Process'>
      <header className='process-head'>
        <h2>Our Process</h2>
        <p>We follow a structured and reliable process to ensure high-quality solar energy solutions.</p>
      </header>
      <main className='process-main'>
        <motion.article className='process-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <div className='article-heading'>
            <img src={one} alt="Assessment Icon"/>
            <h3>Initial Discussion</h3>
          </div>
          <p>Understanding energy needs, site conditions, scope.</p>
        </motion.article>
        <motion.article className='process-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <div className='article-heading'>
            <img src={two} alt="Planning Icon"/>
            <h3>Feasibility Review</h3>
          </div>
          <p>Preliminary technical and regulatory checks.</p>
        </motion.article>
        <motion.article className='process-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <div className='article-heading'>
            <img src={three} alt="Installation Icon"/>
            <h3>Planning and Structuring</h3>
          </div>
          <p>Defining system design approach and installation coordination.</p>
        </motion.article>
        <motion.article className='process-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <div className='article-heading'>
            <img src={four} alt="Monitoring Icon"/>
            <h3>Implementation Readiness</h3>
          </div>
          <p>Preparation for installation through qualified partners.</p>
        </motion.article>
        <motion.article className='process-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <div className='article-heading'>
            <img src={five} alt="Monitoring Icon"/>
            <h3>Long-Term Oversight</h3>
          </div>
          <p>Focus on system performance, reliability, sustainability.</p>
        </motion.article>
      </main>
    </div>
  )
}

export default Process

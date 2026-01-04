import React from 'react'
import './Leadership.css'
import bachelor from '../../assets/Bachelor.png'
import master from '../../assets/Masters.png'
import experience from '../../assets/Experience.png'
import { motion } from 'framer-motion'

const Leadership = () => {
  return (
    <div className='leader' id='leader'>
      <header className='leader-head'>
        <h2>Leadership</h2>
        <p>The company is guided by leadership with a long-term vision for sustainable energy development in Sri Lanka. Our leadership emphasizes responsible growth, ethical practices, and strong governance as the foundation for building credible solar infrastructure.</p>
      </header>
      <main className='leader-cards'>
            <motion.article className='leader-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
                <h2>Mr. Jayantha Wickramasinghe</h2>
                <h3>Chairman</h3>
                <p>Mr. Jayantha Wickramasinghe is an accomplished business leader with nearly 20 years of experience in trading and manufacturing at Solex group. He also brings over 10 years of expertise in renewable energy through his involvement in project development and execution at Lakwell Solar and Lakwell Energy.
He additionally provides consultancy services to several leading construction companies and solution providers across Sri Lanka.</p>
            </motion.article>
            <motion.article className='leader-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
                <div className='leader-row'>
                    <img src={bachelor}/>
                    <h3>BSc (Hons) Uk, Business Computing - University of Northumbria.</h3>
                </div>
                <div className='leader-row'>
                    <img src={master}/>
                    <h3>MSc/M.Litt International Business - University of St. Andrews (Scotland)</h3>
                </div>
                <div className='leader-row'>
                    <img src={experience}/>
                    <h3>20 years of experience in trading and manufacturing at Solex group</h3>
                </div>
            </motion.article>
      </main>
    </div>
  )
}

export default Leadership

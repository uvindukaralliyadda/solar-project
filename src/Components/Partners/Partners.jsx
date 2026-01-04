import React from 'react'
import './Partners.css'
import longi from '../../assets/Longi-min.png'
import ja from '../../assets/ja-min.png'
import fronius from '../../assets/Fronius-min.png'
import huawei from '../../assets/huawei-min.png'
import canadian from '../../assets/candian-min.png'
import trina from '../../assets/trina-min.png'
import SMA from '../../assets/SMA-min.png'
import alumex from '../../assets/Alumex-min.png'
import jinko from '../../assets/jinko.png'
import { motion } from 'framer-motion'

const Partners = () => {
  return (
    <div className='partner' id='partner'>
        <header>
      <h2>Our Partners</h2>
      <p>We collaborate with the world's top Tier-1 solar panels, the most reputable inverters, and state-of-the-art energy storage solutions. Our installations also include high-quality solar hot water systems, along with the safest isolators, racking, breakers, and cabling to ensure reliable and long-lasting performance.</p>
      </header>
      <main className='group' >
            <motion.div className='card' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}><img src={longi}/></motion.div>
            <motion.div className='card' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}><img src={ja}/></motion.div>
            <motion.div className='card' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}><img src={jinko}/></motion.div>
            <motion.div className='card' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}><img src={huawei}/></motion.div>
            <motion.div className='card' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}><img src={trina}/></motion.div>
            <motion.div className='card' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}><img src={SMA}/></motion.div>
            <motion.div className='card' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}><img src={alumex}/></motion.div>
      </main>
    </div>
  )
}

export default Partners

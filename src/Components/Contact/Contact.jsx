import React from 'react'
import './Contact.css'
import emailIcon from '../../assets/email.png'
import phoneIcon from '../../assets/phone.png'
import locationIcon from '../../assets/location.png'
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <header>
        <h2>Contact Us</h2>
        <p>We welcome inquiries from landowners, partners, and stakeholders interested in responsible solar energy development.</p>
      </header>

      <main className='contact-cards'>
        <motion.article className='contact-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <img src={emailIcon} alt="Email Icon"/>
          <h3>Email</h3>
          <p>Jayantha@lakwellenergy.com</p>
          <p>Lakwell.energy@gmail.com</p>
          <p>Lakwell.solar@gmail.com</p>
        </motion.article>
        <motion.article className='contact-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <img src={phoneIcon} alt="Phone Icon"/>
          <h3>Phone</h3>
          <p>+94 74 135 1434</p>
        </motion.article>
        <motion.article className='contact-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
          <img src={locationIcon} alt="Location Icon"/>
          <h3>Address</h3>
          <p>70/2/3B,
            D S Senanayake Mawatha,
            Colombo 08,
            00800</p>
        </motion.article>
      </main>
    </div>
  )
}

export default Contact

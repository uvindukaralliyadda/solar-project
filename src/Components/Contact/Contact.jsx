import React from 'react'
import './Contact.css'
import emailIcon from '../../assets/email.png'
import phoneIcon from '../../assets/phone.png'
import locationIcon from '../../assets/location.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <header>
        <h2>Contact Us</h2>
        <p>We welcome inquiries from landowners, partners, and stakeholders interested in responsible solar energy development.</p>
      </header>

      <main className='contact-cards'>
        <article className='contact-article'>
          <img src={emailIcon} alt="Email Icon"/>
          <h3>Email</h3>
          <p>Lakwell.solar@gmail.com</p>
        </article>
        <article className='contact-article'>
          <img src={phoneIcon} alt="Phone Icon"/>
          <h3>Phone</h3>
          <p>+94 74 135 1434</p>
        </article>
        <article className='contact-article'>
          <img src={locationIcon} alt="Location Icon"/>
          <h3>Address</h3>
          <p>70/2/3B,
            D S Senanayake Mawatha,
            Colombo 08,
            00800</p>
        </article>
      </main>
    </div>
  )
}

export default Contact

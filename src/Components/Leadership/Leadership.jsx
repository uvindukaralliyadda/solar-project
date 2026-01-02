import React from 'react'
import './Leadership.css'
import bachelor from '../../assets/Bachelor.png'
import master from '../../assets/Masters.png'
import experience from '../../assets/Experience.png'

const Leadership = () => {
  return (
    <div className='leader' id='leader'>
      <header className='leader-head'>
        <h2>Leadership</h2>
        <p>The company is guided by leadership with a long-term vision for sustainable energy development in Sri Lanka. Our leadership emphasizes responsible growth, ethical practices, and strong governance as the foundation for building credible solar infrastructure.</p>
      </header>
      <main className='leader-cards'>
            <article className='leader-article'>
                <h2>Mr. Jayantha Wickramasinghe</h2>
                <h3>Chairman</h3>
                <p>Mr. Jayantha Wickramasinghe is an accomplished business leader with nearly 20 years of experience in trading and manufacturing at Solex group. He also brings over 10 years of expertise in renewable energy through his involvement in project development and execution at Lakwell Solar and Lakwell Energy.
He additionally provides consultancy services to several leading construction companies and solution providers across Sri Lanka.</p>
            </article>
            <article className='leader-article'>
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
            </article>
      </main>
    </div>
  )
}

export default Leadership

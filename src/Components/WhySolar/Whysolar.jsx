import React from 'react'
import './Whysolar.css'
import energyindep from '../../assets/Energy Independence.webp'
import cost from '../../assets/Cost Stability.webp'
import Environmental from '../../assets/Environmental Stability.webp'
import Future from '../../assets/Future Readiness.webp'

const Whysolar = () => {
  return (
    <div className='Whysolar' id='Whysolar'>
      <header className='solar-head'>
        <h2>Why Solar Energy</h2>
        <p>Solar energy is one of the most practical and sustainable solutions to meet Sri Lanka’s growing energy demand.</p>
      </header>
      <main className='solar-main'>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={energyindep}/>
                <h3>Energy Independence</h3>
                </div>
                <p>Reduces reliance on imported fuel and strengthens national energy security.</p>
            </article>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={cost}/>
                <h3>Cost Stability</h3>
                </div>
                <p>Provides predictable long-term energy costs compared to conventional energy sources.</p>
            </article>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={Environmental}/>
                <h3>Environmental Responsibility</h3>
                </div>
                <p>Minimizes carbon emissions and supports environmental preservation.</p>
            </article>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={Future}/>
                <h3>Future Readiness</h3>
                </div>
                <p>Aligns with global and national clean energy commitments</p>
            </article>
      </main>
    </div>
  )
}

export default Whysolar

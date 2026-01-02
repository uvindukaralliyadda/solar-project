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
        <p>Solar energy is a smart, cost-effective solution for homes and businesses. It lowers electricity bills, increases energy independence, and supports a cleaner environment for Sri Lanka's future.</p>
      </header>
      <main className='solar-main'>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={energyindep}/>
                <h3>Energy Independence</h3>
                </div>
                <p>Generates your own electricity, reducing reliance on utility providers and protecting you from rising energy costs.</p>
            </article>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={cost}/>
                <h3>Cost Stability</h3>
                </div>
                <p>Locks in predictable energy costs and lowers monthly bills, making budgeting easier for households and businesses alike.</p>
            </article>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={Environmental}/>
                <h3>Environmental Responsibility</h3>
                </div>
                <p>Promotes sustainable practices, helping both families and companies contribute to a greener future.</p>
            </article>
            <article className='solar-article'>
                <div className='article-heading'>
                <img src={Future}/>
                <h3>Future Readiness</h3>
                </div>
                <p>Investing in solar today prepares your home or business for a future where clean energy is the standard.</p>
            </article>
      </main>
    </div>
  )
}

export default Whysolar

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

const Partners = () => {
  return (
    <div className='partner' id='partner'>
        <header>
      <h2>Our Partners</h2>
      <p>We collaborate with the world's top Tier-1 solar panels, the most reputable inverters, and state-of-the-art energy storage solutions. Our installations also include high-quality solar hot water systems, along with the safest isolators, racking, breakers, and cabling to ensure reliable and long-lasting performance.</p>
      </header>
      <main className='group'>
            <div className='card'><img src={longi}/></div>
            <div className='card'><img src={ja}/></div>
            <div className='card'><img src={jinko}/></div>
            <div className='card'><img src={huawei}/></div>
            <div className='card'><img src={trina}/></div>
            <div className='card'><img src={SMA}/></div>
            <div className='card'><img src={alumex}/></div>
      </main>
    </div>
  )
}

export default Partners

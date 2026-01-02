import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Whysolar from './Components/WhySolar/Whysolar'
import Process from './Components/Process/Process'
import Contact from './Components/Contact/Contact'
import Leadership from './Components/Leadership/Leadership'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Whysolar/>
      <Leadership/>
      <Process/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

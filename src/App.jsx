import React, { Suspense } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

// Lazy load all components below About
const Whysolar = React.lazy(() => import('./Components/WhySolar/Whysolar'))
const Partners = React.lazy(() => import('./Components/Partners/Partners'))
const Leadership = React.lazy(() => import('./Components/Leadership/Leadership'))
const Testimonials = React.lazy(() => import('./Components/Testimonials/Testimonials'))
const Process = React.lazy(() => import('./Components/Process/Process'))
const Contact = React.lazy(() => import('./Components/Contact/Contact'))
const Footer = React.lazy(() => import('./Components/Footer/Footer'))

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<div>Loading Why Solar...</div>}>
        <Whysolar />
      </Suspense>

      <Suspense fallback={<div>Loading Partners...</div>}>
        <Partners />
      </Suspense>

      <Suspense fallback={<div>Loading Leadership...</div>}>
        <Leadership />
      </Suspense>

      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div>Loading Process...</div>}>
        <Process />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

import React from 'react'
import MarqueeSection from './components/MarqueeSection.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Routing from './Routing.jsx'
const App = () => {
  return (
    <div>
      <MarqueeSection />
      <Nav />
      <Routing />
      <Footer />
    </div>
  )
}

export default App

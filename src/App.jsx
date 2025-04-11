import React from 'react'
import MarqueeSection from './components/MarqueeSection.jsx'
import Nav from './components/Nav.jsx'
import HeroSection from './components/HeroSection.jsx'
import StudyAbroadSection from './components/StudyAbroadSection.jsx'
import CountryCarousel from './components/CountryCarousel.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import StudyAbroadSection2 from './components/StudyAbroadSection2.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div>
      <MarqueeSection />
      <Nav />
      <HeroSection />
      <CountryCarousel />
      <StudyAbroadSection />
      <StudyAbroadSection2 />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default App

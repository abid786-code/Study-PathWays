import React from 'react'
import HeroSection from './components/HeroSection.jsx'
import StudyAbroadSection from './components/StudyAbroadSection.jsx'
import CountryCarousel from './components/CountryCarousel.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import StudyAbroadSection2 from './components/StudyAbroadSection2.jsx'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <CountryCarousel />
      <StudyAbroadSection />
      <StudyAbroadSection2 />
      <TestimonialsSection />
      <FaqSection />
    </div>
  )
}

export default Home

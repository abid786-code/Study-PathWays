import React from 'react'
import { Router, Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import ThankyouPage from "./ThankyouPage.jsx";
import Home from './Home.jsx';
const Routing = () => {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        {/* Add more routes here */}
      </Routes>

    </div>
  )
}

export default Routing

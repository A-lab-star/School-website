import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About'
import News from './routes/News'
import Gallery from './routes/Gallery'
import Contact from './routes/Contact'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
    </div>
  )
}

export default App
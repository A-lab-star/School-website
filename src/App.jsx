import React from 'react'
import Home from './component/Home'
import About from './component/About'
import News from './component/News'
import Gallery from './component/Gallery'
import ContactUs from './component/ContactUs'

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <About />
      <News />
      <Gallery />
      <ContactUs />
    </div>
  )
}

export default App
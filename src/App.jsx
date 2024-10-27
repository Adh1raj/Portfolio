import React from 'react'
import Navbar from './Components/Navbar/Navbar/'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import ContactMe from './Components/ContactMe/ContactMe'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <ContactMe/>
    </div>
  )
}

export default App

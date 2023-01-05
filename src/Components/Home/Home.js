import React from 'react'
import Contact from './Contact/Contact'
import Banner from './Banner/Banner'
import Gallery from './Gallery/Gallery'
import About from './About/About'

const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <Gallery/>
        <Contact/>
    </div>
  )
}

export default Home
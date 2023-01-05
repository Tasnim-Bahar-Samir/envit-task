import React from 'react'
import Contact from './Contact/Contact'
import Banner from './Banner/Banner'
import Gallery from './Gallery/Gallery'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Gallery/>
        <Contact/>
    </div>
  )
}

export default Home
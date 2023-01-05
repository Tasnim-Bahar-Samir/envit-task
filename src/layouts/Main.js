import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className=' max-w-7xl mx-auto'>
        <Outlet/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Main
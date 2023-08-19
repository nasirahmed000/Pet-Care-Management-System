import React from 'react'
import Navbar from '../Components/Home/Navbar/Navbar'
import Pricing from '../Components/Home/Pricing/Pricing'
import Footer from '../Components/Home/Footer/Footer'
import Register from '../Components/Home/Login/Register'

export default function Booking() {
  return (
    <div>
        <Navbar/>
        <Register prop="prop"/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

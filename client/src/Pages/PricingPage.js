import React from 'react'
import Navbar from '../Components/Home/Navbar/Navbar'
import Pricing from '../Components/Home/Pricing/Pricing'
import Footer from '../Components/Home/Footer/Footer'
import Register from '../Components/Home/Login/Register'

export default function PricingPage() {
  return (
    <div>
        <Navbar/>
        <Pricing/>
        <Register prop="prop"/>
        <Footer/>
    </div>
  )
}

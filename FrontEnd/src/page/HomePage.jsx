import React from 'react'
import Contact from '../Components/Contact'
import Booking from '../Components/Booking'
import Gallery from '../Components/Gallery'
import Hero from '../Components/Hero'
import Activities from '../Components/Activities'

const HomePage = () => {
  return (
    <div>
          <Hero/>
          <Activities />
          <Booking />
          <Gallery />
          <Contact />
    </div>
  )
}

export default HomePage
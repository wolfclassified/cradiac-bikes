import React from 'react'
import Hero from '../components/Hero';
import Carousel from '../components/Carousel'
import OurBikes from '../components/OurBikes'
import Customer from '../components/Customer'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='mx-[120px]'>
      <Hero/>
      <Carousel/>
      <OurBikes/>
      <Customer/>
      <Feature/>
    </div>
  )
}

export default HomePage
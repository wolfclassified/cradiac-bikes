import React from 'react'
import heroCycle from '../assets/hero bicycle.svg'

const Hero = () => {
  return (
    <>
 <section className="hero">
    <div className="hero-content">
      <h1><strong>Ride in</strong> <em className="text-[#8DC63F]">Style</em></h1>
      <p>At Cradiac Bikes, we combine sleek design with reliable performance to bring you a ride that turns heads and handles every journey with ease. Whether you're cruising through the city, commuting to work, or exploring new paths, our bikes offer comfort, durability, and a bold sense of style. Every detail is crafted for those who value movement, freedom, and self-expression. With Cradiac, it’s not just about getting there — it’s about enjoying every mile along the way.</p>
      <a 
        href="https://www.linkedin.com/in/diganta-das-connect" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105"
        >
          Learn More ➜
      </a>
    </div>
    <div className="hero-image">
      <img src={heroCycle} alt="Cradiac Bike"/>
    </div>
  </section>
    <div className="arrow">
  </div>
  </>
  )
}

export default Hero
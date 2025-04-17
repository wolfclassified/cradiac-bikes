import React from 'react'
import VideoBanner from '../components/videoBanner'
import BannerVideo from '../assets/videobanner.mp4'
import WatchAndShop from '../components/WatchAndShop'
import Showcase from '../components/Showcase'

const FeatureCollection = () => {
  return (
    <div className='mx-[120px]'>
    <div className='pt-4'>
    <VideoBanner videoSrc={BannerVideo}/>
    </div>
    <WatchAndShop/>
    <Showcase heading="Explore Best Sellers" type="Bestseller"/>
    <Showcase heading="New Arrivals" type="Arrival"/>
    </div>
  )
}

export default FeatureCollection
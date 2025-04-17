import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

const MainLayouts = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayouts
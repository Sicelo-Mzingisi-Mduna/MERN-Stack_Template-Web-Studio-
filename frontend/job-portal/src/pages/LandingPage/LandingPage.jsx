/* eslint-disable no-unused-vars */
import React from 'react'
// import MotionScroll from '../../components/animations/MotionScroll'
import NavBar_LandingPage from '../LandingPage/components/NavBar_LandingPage'
import HeroSection_LandingPage from '../LandingPage/components/HeroSection_LandingPage'
import InfoSection_LandingPage from '../LandingPage/components/InfoSection_LandingPage'
import Analytics_LandingPage from '../LandingPage/components/Analytics_LandingPage'
import Footer_LandingPage from '../LandingPage/components/Footer_LandingPage'
import { useAuth } from '../../context/AuthContext'

const LandingPage = () => {
  const {user, isAuthenticated} = useAuth();
  return (
    <>
    <NavBar_LandingPage />
    {/* <MotionScroll className="LoginRoot"> */}

    <HeroSection_LandingPage />

    <InfoSection_LandingPage/>

    <Analytics_LandingPage/>

    <Footer_LandingPage/>
    {/* </MotionScroll> */}
    </>
  )
}

export default LandingPage
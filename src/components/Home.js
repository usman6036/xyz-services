import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Welcomeservices from './Welcomeservices'
import Chooseus from './Chooseus'
import Howitworks from './Howitworks'
import Comparesection from './Comparesection'
import Ourteam from './Ourteam'
import Testimonialas from './Testimonialas'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
    <Hero/>
    <Welcomeservices/>
    <Chooseus/>
    <Howitworks/>
    <Comparesection/>
    <Ourteam/>
    <Testimonialas/>
    <Footer/>
    </div>
  )
}

export default Home

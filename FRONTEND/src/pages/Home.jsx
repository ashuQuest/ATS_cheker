import React from 'react'
import Banner from '../Components/Home/Banner'
import Hero from '../Components/Home/Hero'
import Feature from '../Components/Home/Feature'
import Testimonials from '../Components/Home/Testimonials'
import CallToAction from '../Components/Home/CallToAction'
import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <div>
        <Banner />
        <Hero />
        <Feature/>
        <Testimonials />
        <CallToAction />
        <Footer />

    </div>
  )
}

export default Home
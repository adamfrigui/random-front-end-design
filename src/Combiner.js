import './App.css';
import React from 'react'
import Footer from './components/Footer/Footer'
import Hero from './components/HeroSection/Hero'
import Join from './components/Join/Join'
import Plans from './components/Plans/Plans'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Testimonials from './components/Testimonials/Testimonials'

const Combiner = () => {
    return (
        <div className='App'>
            <Hero/>
            <Programs/>
            <Reasons/>
            <Plans/>
            <Testimonials/>
            <Join/>
            <Footer/>
        </div>
    )
}

export default Combiner
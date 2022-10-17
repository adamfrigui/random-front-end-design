import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header />

        {/* the best ad */}
        <div className='the-best-ad'>
          <motion.div initial={{ left: mobile ? "160px" : "238px" }} whileInView={{ left: '8px' }} transition={{ ...transition, type: 'tween' }} ></motion.div>
          <span>The best Fitness club in the town</span>
        </div>
        {/*  */}

        {/* Hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className='span'>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>
        <div className='figures'>
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
            <span>expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={40} delay='4' preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get started</button>
          <button className='btn'>Learn more</button>
        </div>
      </div>
      <div className='right-h'>
        <Link to='/Login' className='btn-1'>
          <button className='btn log-btn' > Log In </button>
        </Link>
        <motion.div className='heart-rate' transition={transition} whileInView={{ right: "4rem" }} initial={{ right: '-0.1rem' }}>
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img src={hero_image_back} alt="" className='hero-image-back' transition={transition} whileInView={{ right: "20rem" }} initial={{ right: '11rem' }} />
        <motion.div className='calories' transition={transition} whileInView={{ right: "28rem" }} initial={{ right: '37rem' }}>
          <img src={Calories} alt="" />
          <div>
            <span> Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
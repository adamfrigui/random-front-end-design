import React from 'react'
import './Testimonials.css'
import { useState } from 'react'
import { testimonialsData } from "../../data/testimonialsData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type :'spring' ,duration : 3}

    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <motion.span key={selected}  initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:100}} transition={{...transition,duration:2}}>{testimonialsData[selected].review}</motion.span>
                <span>
                    <span className='name-t'>
                        {testimonialsData[selected].name}
                    </span>
                    -{testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1 ,x:0}} transition={{...transition,duration:2}}></motion.div>
                <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1 ,x:0}} transition={{...transition,duration:2}}></motion.div>
                <motion.img src={testimonialsData[selected].image} key={selected}  initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-100}} transition={{...transition,duration:2}}/>
                <div className="arrows">
                    <img src={leftArrow} onClick={()=>{selected===0?setSelected(tLength-1):setSelected((prev)=>prev-1)}} alt=""/>
                    <img src={rightArrow} onClick={()=>{selected===tLength-1?setSelected(0):setSelected((prev)=>prev+1)}} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
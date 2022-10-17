import React from 'react'
import './Programs.css'
import { programsData } from "../../data/programsData"
import rightArrow from "../../assets/rightArrow.png"

const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            <div className='programs-header'>
                <span className='stroke-text'>Explore our </span>
                <span>Programs </span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className='program-categories'>
                {
                    programsData.map((Program) => (
                        <div className='category'>
                            {Program.image}
                            <span>{Program.heading}</span>
                            <span>{Program.details}</span>
                            <div className='join-now'>
                                <span>Join now</span>
                                <img src={rightArrow} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Programs
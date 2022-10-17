import React from 'react'
import './Footer.css'

import Logo from '../../assets/logo.png'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"


const Footer = () => {
    return (
        <div className='Footer-container'>
            <hr />
            <div className='footer'>
                <div className="social-links">
                    <div> <BsGithub width={50} /></div>
                    <div><BsInstagram /></div>
                    <div> <BsLinkedin /></div>
                </div>

                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-footer-1"></div>
            <div className="blur blur-footer-2"></div>
        </div>
    )
}

export default Footer
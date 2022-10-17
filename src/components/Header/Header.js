import React from 'react'
import './Header.css'
import Logo from "../../assets/logo.png"
import { useState } from 'react'
import { Link } from 'react-scroll'
 
import { Link as Li } from "react-router-dom"
import { FaBars } from "react-icons/fa"

const Header = () => {
    const mobile = window.innerWidth  <= 940 ? true : false;
    const [MenuOpened, setMenuOpened] = useState(false);
    return (

        <div className='bruh'>
            {mobile ?  <label className="check-btn" onClick={() => setMenuOpened(!MenuOpened)}>
                <FaBars color='white' />
            </label>:<div /> }
            <label className="logo"><img src={Logo} alt="" /></label>
            <ul className={MenuOpened ? "ul-modify" : ""}>
                <li><Link onClick={() => setMenuOpened(!MenuOpened)} style={{cursor:"pointer"}} className="link-class" to='home' spy={true} smooth={true}>Home</Link>   </li>
                <li><Link onClick={() => setMenuOpened(!MenuOpened)} style={{cursor:"pointer"}} className="link-class" to='Programs' spy={true} smooth={true}>Programs</Link></li>
                <li><Link onClick={() => setMenuOpened(!MenuOpened)} style={{cursor:"pointer"}} className="link-class" to='reasons' spy={true} smooth={true}>Why us</Link></li>
                <li><Link onClick={() => setMenuOpened(!MenuOpened)} style={{cursor:"pointer"}} className="link-class" to='plans' spy={true} smooth={true}>Plans</Link></li>
                <li><Link onClick={() => setMenuOpened(!MenuOpened)} style={{cursor:"pointer"}}  className="link-class" to='testimonials' spy={true} smooth={true}>Testimonials</Link> </li>
                <li><Li className='shop-btn link-class' to="/Shop">Shop </Li>    </li>
            </ul>
        </div>)







}

export default Header
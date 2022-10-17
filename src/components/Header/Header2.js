import React from 'react'
import './Header.css'
import Logo from "../../assets/logo.png"
import { useState } from 'react'
 import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link as Li} from "react-router-dom" 
import { useSelector } from 'react-redux'
import { FaBars } from "react-icons/fa"



const Header2 = () => {
    const mobile = window.innerWidth <= 940 ? true : false;
    const [MenuOpened, setMenuOpened] = useState(false);
    const state = useSelector((state)=>state.shop)
    return (
        <div className='bruh'>
        {mobile ?  <label className="check-btn" onClick={() => setMenuOpened(!MenuOpened)}>
            <FaBars color='white' />
        </label>:<div /> }
        <label className="logo"><img src={Logo} alt="" /></label>
        <ul className={MenuOpened ? "ul-modify" : ""}>
        <li><Li className='shop-btn' to="/">Back to the Home Page</Li> </li>     
            <li><button className='btn'><AiOutlineShoppingCart/>Cart({state.length}) </button></li>
            <li><Li className='shop-btn link-class' to="/Shop">Shop </Li>    </li>
        </ul>
    </div>
        )
     
        
     

 
        
        
        
        
 
}

export default Header2
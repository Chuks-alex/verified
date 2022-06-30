import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {GiArrowWings} from "react-icons/gi"
import {GrClose} from "react-icons/gr"
import logo from "../images/logo.png"
import {BsCart4} from "react-icons/bs"
import "./nav.css"
import {Link} from "react-router-dom"

function Nav() {
const [navState, setNavState] = useState(false)
const [activeNav, setActiveNav] = useState("#")
let [count, setCount] = useState(0)
const html = document.querySelector("html")
html.addEventListener("click", ()=> setNavState(false))
  return (
   <nav onClick={(e)=> e.stopPropagation()} className='container nav__container'>
    <div className="nav__icons">
    {navState ? <GrClose onClick={()=>setNavState(!navState)} className="NAVE"/> : <GiHamburgerMenu onClick={()=>setNavState(!navState)} className="NAVED"/>}
    </div>
    <div className={`links ${navState? "responsive__nav" : ""}`}>
        <ul  className='ul'>
             <li className="btn"><Link to="/">Home</Link></li>
            <li  className='btn' ><Link to="/about">About</Link></li>
            <li className='btn'><Link to="/wigs">wigs</Link></li>
            <li className='btn'><Link to="/luxury">Luxury Hair</Link></li>
            <li className='btn'><Link to="/login">login</Link></li>
            <li className='btn'><Link to="/signup">signup</Link></li>
            <li className='btn'><Link to="/contact">Contact us</Link></li> 

        </ul>
    </div>
    <div className="logo">
    <img src={logo} alt="" />

    </div>
    
   </nav>

  )
}

export default Nav
import React from 'react'
import "./header.css"
import {HiBadgeCheck} from "react-icons/hi"
import {RiDoubleQuotesL} from "react-icons/ri"
import {RiDoubleQuotesR} from "react-icons/ri"
import peruvian1 from "../images/peruvian1.avif"
import peruvian4 from "../images/peruvian4.avif"
import blanche15 from "../images/blanche15.JPG"
import blanche14 from "../images/blanche14.JPG"
function Header() {
  return (
    <div className="header">
        <div className="blanche">
            <span>B</span>
            <span>L</span>
            <span>A</span>
            <span>N</span>
            <span>C</span>
            <span>H</span>
            <span>E</span>
        </div>
        <h1 className='luxury'>LUXURY  HAIR</h1>
        <div className="shop">
          <div className="shop__header">
          <p><RiDoubleQuotesL/> Talk luxury, Talk BLANCHE Hair,We've got you covered for all types of luxury hair ranging from...  <RiDoubleQuotesR/></p>
         
          </div>
           <div className="flex">
          <div className="check">
          <h6><HiBadgeCheck className='color-icon'/> FRONTALS</h6>
          <h6><HiBadgeCheck className='color-icon'/> CLOSURES</h6>
          <h6><HiBadgeCheck className='color-icon'/> WIGS </h6>
          </div>
{/* ========image here================ */}
<div className="wig__img">
  <img src={peruvian1} alt="wigs" />
  <img src={peruvian4} alt="wigs" />
  <img src={blanche15} alt="wigs" />
  <img src={blanche14} alt="wigs" />

</div>
          </div>
          <button className="btn1">shop with us</button>
         
        </div>
    </div>
  )
}

export default Header
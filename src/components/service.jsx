import React from 'react'
import {GiRoyalLove} from "react-icons/gi"
import {BsCalendar2CheckFill} from "react-icons/bs"
import {BsPatchCheck} from "react-icons/bs"
import {GiGlobe} from "react-icons/gi"
import "./service.css"
function Service() {
  return (
    <div className="service__container">
        <div className="service__title">
            <h2>BLANCHE</h2>
            <p>GUARANTEES</p>
        </div>
        <div className="service">
            <GiRoyalLove className='service__icon'/>
            <h3>TOP-NOTCH CUSTOMER SERVICE</h3>
            <p>Our team is made up of hair experts ready to help you by phone,text,and email.</p>
        </div>
        <div className="service">
            <BsCalendar2CheckFill className='service__icon'/>
            <h3>30 DAY GUARANTEE</h3>
            <p>Wear it,dye it, even cut it! if you are not satisfied w'll exchange it within 30 days.</p>
        </div>
        <div className="service">
            <BsPatchCheck className='service__icon'/>
            <h3>100% VIRGIN HAIR</h3>
            <p>Our hair is gently steam-processed and can last up to a year. Available in 8 textures and 5 shades</p>
        </div>
        <div className="service">
            <GiGlobe className='service__icon'/>
            <h3>CERTIFIED STYLISTS</h3>
            <p>Our stylists are choosen because of their industry-leading standards. Both our hair and services are quality guaranteed.</p>
        </div>
    </div>
  )
}

export default Service
import React from 'react'
import {FaInstagramSquare} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import {BiPhoneCall} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import "./contact.css"
function Contact() {
  return (
    <div id="contact" className='contact'>
        <div className="contact__head">
        <h4>CONTACT US</h4>
        <p>We are always availabe 24/hours of the day to assist you </p>
        <h6>Have a Question?</h6>
        </div>
      <div className="contact__one">
      <FaInstagramSquare className='contact__icon insta'/>
      <a href="http://instagram.me.blanche_hairs">Contact Us</a>
      
      </div>
      <div className="contact__one">
      <BsWhatsapp className='contact__icon whatsapp'/>
      <a href="http://whatsapp.api.me.2347066775521">Contact Us</a>
      
      </div>
      <div className="contact__one">
      <BiPhoneCall className='contact__icon'/>
      <a href="http://instagram.me.blanche_hairs">Contact Us</a>
     
      </div>
      <div className="contact__one">
      <AiOutlineMail className='contact__icon'/>
      <a href="http://instagram.me.blanche_hairs">message Us</a>
      
      </div>
      <div className="contact__one facebook">
      <AiFillFacebook className='contact__icon'/>
      <a href="http://instagram.me.blanche_hairs">Contact Us</a>
     
      </div>
    </div>
  )
}

export default Contact
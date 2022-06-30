import React, { useState } from 'react'
import "./pictures.css"
import blanche3 from "../images/blanche3.JPG"
import blanche15 from "../images/blanche15.JPG"
import blanche16 from "../images/blanche16.JPG"
import blanche6 from "../images/blanche6.JPG"
import blanche7 from "../images/blanche7.JPG"
import blanche8 from "../images/blanche8.JPG"
import blanche9 from "../images/blanche9.JPG"
import blanche10 from "../images/blanche10.JPG"
import blanche11 from "../images/blanche11.JPG"
import blanche12 from "../images/blanche12.JPG"
import blanche13 from "../images/blanche13.JPG"
import blanche14 from "../images/blanche14.JPG"
let pictures =[
  {
    img: blanche3,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche15,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche16,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche7,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche8,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche9,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche10,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche11,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche12,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche13,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche14,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
  {
    img: blanche15,
    title: "malaysian wig",
    desc: "you can never go wrong rocking this gorgeous peice"
  },
]
function Pictures() {
  let [seeMore, setSeeMore] = useState(true)
  return (
    <div className='pictures__container'>
        <div className="pictures__title">
            <h3>#BLANCHEHAIR</h3>
        </div>
        
           <div className="didd">
           {pictures.map((photo)=>{
              let {id,img,title,desc} = photo
              return <div key={id} className='pictures'>
              <div className="div">
              <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              
              </div>
            })}
           </div>
       
        <a href="#">SEE MORE LOOKS</a>
    </div>
  )
}

export default Pictures
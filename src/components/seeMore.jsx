import React from 'react'
import "./seemore.css"
import relax from "../images/relax.JPG"
function SeeMore() {
  return (
    <div className='sitback'>
        <div className="sitback__relax">
            <span>SIT BACK AND</span>
            <h1>RELAX</h1>
            <p>We rounded up the best stylists in the country so you can be sure your hair is in really, really good hands.</p>
            <a href="#"> LEARN MORE</a>
        </div>
        <div className="relax">
          <img src={relax} alt="" />
        </div>
        <div className="blanche__cover">
          <h1>BLANCHE</h1>
        </div>
    </div>
  )
}

export default SeeMore
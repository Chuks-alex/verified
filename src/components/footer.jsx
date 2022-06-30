import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <footer>
        <h1>BLANCHE</h1>
        <div className="footer__container">
            <ul className='first__foot'>
            <li><a href="#">about</a></li>
            <li><a href="#">careers</a></li>
            <li><a href="#">contact</a></li>
            </ul>
            <ul className='first__foot'>
            <li><a href="#">privacy</a></li>
            <li><a href="#">terms</a></li>
            <li><a href="#">our ads</a></li>
            </ul>
            <ul className='first__foot'>
            <li><a href="#">our guarantee</a></li>
            <li><a href="#">our privacy rights</a></li>
            <li><a href="#">do not sell my personal information</a></li>
            </ul>
        </div>
        <div className="sign__up">
            <p>Sign up to get the latest on sales, new releases and more.....</p>
            <div className="input">
                <input type="text" placeholder='Email address' />
                <button>sign up</button>

            </div>
            
        </div>
        <p className="copyright">
            &copy;2022 BLANCHE
            </p>
    </footer>
  )
}

export default Footer
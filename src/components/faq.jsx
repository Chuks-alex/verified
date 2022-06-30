import React, {useState} from 'react'
import {IoIosArrowUp} from "react-icons/io"
import {IoIosArrowDown} from "react-icons/io"
import "./faq.css"
let question2 = [
    {
        question1: "who is going to do my hair",
        answer1: "one of Blanche approved and recommended stylist. all our known stylists come highly recommended and work in salons. They are known for their outstanding professionalism,range of techniques and skills,plus excellent client ratings."
    },
    {
        question1: "what kind of hair do you offer?",
        answer1: "we have unprocessed luxury virgin hair in 8 different textures. Our virgin hair has not been chemically processed. We also have precolored hair, which has been professionally dyed to ensure quality and longevity. All ourhair is backed by a 30-day guarantee"
    },
    {
        question1: "what happen after i choose my look?",
        answer1: "After you choose your hair you  will be matched with a stylist at a very affordable price. You can see the stylist work and their salon's locationbefore you book with them.we will help you book the appointment and answer any question you may have"
    },
    {
        question1: "Is Blanche install really a better deal?",
        answer1: "Yes! it's basically hair and service for the price of one. choose the look you want,and the bundles to your cart and we will pay for you to get your hair installed by a local stylist. That means you are paying 0# for your next sew-in."
    },
    {
        question1: "How does this process actually work?",
        answer1: "It's super simple - after you purchase your look, we'll send you a prepaid voucher to cover the cost of your salon appointment. When your stylist scans it,they are paid instantly by Blanche"
    },
    {
        question1: "What if i want to get my hair done by another stylist ? can i still get the Blanche install?",
        answer1: "You must have your hair done by a Blanche recommended stylist in order to get your free install.       Know a stylist that fits our criteria? we'd love to meet them! have them reach out to Blanche to discuss joining our team of stylists."
    },
]
function Faq() {
 let [question, setQuestion ] = useState(question2)
 let [showQuestion, setShowQuestion] = useState(false)
  return (
    <div className="faq__container">
        <h3>frequently asked questions</h3>
        <section className="info">
           {question2.map(({id,question1, answer1})=>{
            return <div key={id}>
                <div className="move">
                <p>{question1}</p>
                <button className='faq__btn' onClick={()=>setShowQuestion(!showQuestion)}>
                   {showQuestion? <IoIosArrowDown/> : <IoIosArrowUp/>} 
                </button>
                </div>
                {showQuestion && <h6 className='answer'>{answer1}</h6>}
            </div>

           })}
        </section>
    </div>
  )
}

export default Faq
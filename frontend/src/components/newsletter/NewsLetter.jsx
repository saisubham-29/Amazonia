import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers On your Email</h1>
        <p>Suscribe To Our Newsletter and Stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email id  '/>
            <button>Subscribe</button>
        </div>
    </div> 
  ) 
}

export default NewsLetter
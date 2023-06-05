import React from 'react'
import './join.scss'
import './responsive.scss'


export const Join = () => {
  return (
    <div className='join flex' id='join'>
        <div className="left-j">
            <div className="flex column">
                <hr />
                <span><span className='stroke-text '>READY TO</span> LEVEL UP</span>
                <span>YOUR BODY <span className='stroke-text'>WITH US?</span></span>
            </div>
        </div>
        <div className="right-j">
            <div className="j-search flex align-center">
                <input type="text" placeholder='Enter your email address here' />
                <button className='btn'>join now</button>
            </div>
        </div>
    </div>
  )
}

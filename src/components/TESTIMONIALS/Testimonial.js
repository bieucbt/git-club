import React, { useState } from 'react'
import './testimonial.scss'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import './responsive.scss'


export const Testimonial = () => {

    const [selected, setSelected] = useState(0)
    const Tlength = testimonialsData.length
    const info = testimonialsData[selected]
    
  return (
    <div className="testimonial flex" id='testimonials'>
        <div className="left-t flex column">
            <span>TESTIMONIALS</span>
            <span className='stroke-text'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            <span>
                {info.review}
            </span>
            <span>
                <span>{info.name}</span>
                {"  -  "}
                <span>{info.status}</span>
            </span>
        </div>
        <div className="right-t">
            <div className='img'><img src={info.image} alt="" /></div>

            <div className="arrows">
                <img 
                onClick={() => {selected === 0 ? setSelected(Tlength-1) : setSelected((prev) => prev - 1) }}
                src={leftArrow}  
                />

                <img  
                src={rightArrow} 
                onClick={() => {selected === Tlength - 1 ? setSelected(0) : setSelected((prev) => prev + 1) }}
                />
            </div>
        </div>
    </div>
  )
}

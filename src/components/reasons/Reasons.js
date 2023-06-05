import React from 'react'
import './reasons.scss'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tickk from '../../assets/tick.png'
import adidas from '../../assets/adidas.png'
import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'
import './responsive.scss'


const Reasons = () => {
  return (
    <div className='reasons flex' id='reason'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r flex">
            <p>some reasons</p>
            <h1 className="heading"><span className='stroke-text'>WHY</span> CHOOSE US?</h1>
            <div className='details-r flex column'>
                <div className='flex'><img src={tickk} alt="" /><span>OVER 140+ EXPERT COACHS</span> </div>
                <div className='flex'><img src={tickk} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span> </div>
                <div className='flex'><img src={tickk} alt="" /><span>1 FREE PROGRAM FOR NEW MEMBER</span> </div>
                <div className='flex'><img src={tickk} alt="" /><span>RELIABLE PARTNErs</span> </div>
            </div>

            <div className="PARTNERS flex column">
                <p style={{
                    color: '$gray'
                }}>OUR PARTNERS</p>
                <div className='flex'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons
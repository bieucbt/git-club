import React from 'react'
import './programs.scss'
import {programsData} from '../../data/programsData.js'
import rightArrow from '../../assets/rightArrow.png'
import './responsive.scss'


const Programs = () => {
  return (
    <div className="program flex" id="programs">
        <div className="program-header flex">
            <span className='stroke-text'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text'>TO SHAPE YOU</span>
        </div>

        <div className="programs-categories flex">
          {programsData.map(program => (
            <div className="category flex" key={program.id}>
              {program.image}
              <span>{program.heading}</span>
              <span className='flex'>{program.details}</span>
              <div className="join-now flex align">
                <button className="program-button">Join now</button>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs
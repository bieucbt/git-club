import React from 'react'
import './plans.scss'
import '../programs/programs.scss'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './responsive.scss'

const Plans = () => {
  return (
    <div className="plans flex column " id="plans">
      <div className="blur plan-blur-l"></div>
      <div className="plans-header flex justify-center">
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
      </div>
      <div className="plansData flex align-center justify-center">
          {
            plansData.map((data, i) => (
              <div className="plans-package flex column" key={i}>
                  {data.icon}
                  <h3>{data.name}</h3>
                  <h1>{data.price}</h1>
                  <div className="feature flex column">
                    {
                      data.features.map((feature, i) => (
                      <div className='flex' key={i}>
                          <img src={whiteTick} alt="" />
                          <p>{feature}</p>
                      </div>
                      
                      ))
                    }
                  </div>
                  <p>See more benefits</p>
                  <button>join now</button>
              </div>
            ))
          }
      </div>
      <div className="blur plan-blur-r"></div>
    </div>
  )
}

export default Plans
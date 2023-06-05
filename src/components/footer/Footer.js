import React from 'react'
import './footer.scss'
import logo from '../../assets/logo.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'


const Footer = () => {
  return (
    <div className="footer-container flex column">
        <div className="blur blur-l"></div>
        <div className="social-f flex align-center justify-center">
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div className="logo-f flex justify-center">
            <img src={logo} alt="" />
        </div>
        <div className="blur blur-r"></div>
    </div>
  )
}

export default Footer
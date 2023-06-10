import React, { useState } from 'react'
import {Link} from 'react-scroll'
import  './Header.scss'
import logo from '../../assets/logo.png'
import './responsive.scss'
import bars from '../../assets/bars.png'



export const Header = () => {
  const mobile = window.innerWidth <= 768 ? true: false;
  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <div className="header flex between" id='/'>
          <img src={logo} className='logo' alt="" />
          {(menuOpen === false && mobile === true ? (
            <div className="bars"
              onClick={() => setMenuOpen(true)}
            >
            <img src={bars} alt="" />
          </div>
          ) : (
            <ul className='header-menu flex align'
            >
            <li onClick={() => setMenuOpen(false)}>
              <Link
                 onClick={() => setMenuOpen(false)}
                 to='/'
                 smooth={true}
              >Home</Link>  </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                onClick={() => setMenuOpen(false)}
                to='programs'
                smooth={true}
              >Programs</Link> </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                onClick={() => setMenuOpen(false)}
                to='reasons'
                smooth={true}
              >Why us</Link> </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                onClick={() => setMenuOpen(false)}
                to='plans'
                smooth={true}
              >Plans</Link> </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link
                onClick={() => setMenuOpen(false)}
                to='testimonials'
                smooth={true}
              >Testimonials</Link> </li>
          </ul>
          ) )}
      </div>
  )
}

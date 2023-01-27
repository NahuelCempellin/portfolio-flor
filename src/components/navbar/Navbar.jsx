import React from 'react'
import './navbar.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import laptop from '../../assets/spline/Spline/images/icon-laptop.svg'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            F
        </div>

        <div className='redes-cont'>
          <a>
            <FaLinkedinIn/>
          </a>
          <a>
            <SiGithub/>
          </a>
        </div>
    </div>
  )
}

export default Navbar
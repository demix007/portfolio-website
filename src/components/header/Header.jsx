import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello, I'm</h5>
      <h1>Ayodeji Abidemi</h1>
      <h5 className="text-light">Fullstack Web Developer</h5>
      <CTA />
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="MyImage" />
      </div>
      
    </div>
   </header>
  )
}

export default Header
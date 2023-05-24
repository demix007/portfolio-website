import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FiUserCheck} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {MdOutlineCleaningServices} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'



const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
   <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FcHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUserCheck/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineCleaningServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
   </nav>
  )
}

export default Nav
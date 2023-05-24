import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5> 
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="me" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />  
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>
            
            <article className='about__card'>
              <HiUsers className='about__icon' />  
              <h5>Clients</h5>
              <small>150+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderActive className='about__icon' />  
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </article>
            
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente, 
            quo ipsa hic, dolorem repudiandae enim tenetur quisquam facilis dolor placeat 
            inventore est? Consectetur aliquam exercitationem magnam quam quas reprehenderit 
            rem error nobis corporis? Officiis porro reiciendis non asperiores praesentium.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
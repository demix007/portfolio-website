import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaGitlab} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/ayodejiabidemi" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/demix007" target="_blank"><FaGithub/></a>
        <a href="https://gitlab.com/ayodejiabidemi007" target="_blank"><FaGitlab/></a>
    </div>
  )
}

export default HeaderSocials
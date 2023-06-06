import React from 'react';
import './footer.css';
import { FiGithub } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => (
  <footer>
    <a href="#" className="footer__logo">demix007</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://github.com/demix007"><FiGithub /></a>
      <a href="linkedin.com/in/ayodejiabidemi"><AiFillLinkedin /></a>
      <a href="https://twitter.com/Dat_dope_demix"><AiFillTwitterCircle /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; demix007. All rights reserved</small>
    </div>
  </footer>
);

export default Footer;

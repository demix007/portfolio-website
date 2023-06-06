import React from 'react';
import './contact.css';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ayodejiabidemi007@gmail.com</h5>
            <a href="mailto:ayodejiabidemi007@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348163046727</h5>
            <a href="https://api.whatsapp.com/send?phone=2348163046727" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;

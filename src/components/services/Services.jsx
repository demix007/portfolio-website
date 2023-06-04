import React from 'react';
import './services.css';
import { BsCheck2Circle } from 'react-icons/bs';

const Services = () => (
  <section id="services">
    <h5> What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Front-End Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Back-End Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;

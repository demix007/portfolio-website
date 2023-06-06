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
            <p>Component Development</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>RESTful API Implementation</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Responsive Design</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Integration with Backend</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Testing and Debugging</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Optimization and Performance</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Deployment and Maintenance</p>
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
            <p>API Development</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Database Integration</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Authentication and Authorization</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Third Party Integrations</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Testing and Debugging</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Deployment and Scalability</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Monitoring and Maintenance</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Full-Stack Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>UI/UX Design</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Database Management</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>API Development</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Testing and Quality Assurance</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Deployment</p>
          </li>
          <li>
            <BsCheck2Circle className="service__list-icon" />
            <p>Maintenance and Support</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;

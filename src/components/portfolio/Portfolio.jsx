import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './portfolio.css';
import SpaceTravelers from '../../assets/spacetravelers.png';
import Bookstore from '../../assets/bookstore.png';
import AwesomeBooks from '../../assets/awesome_books.png';
import CountryFinder from '../../assets/country_finder.png';
import Leaderboard from '../../assets/leaderboard.png';
import CarRentals from '../../assets/car_rentals.png';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: SpaceTravelers,
      title: 'Space Travelers Hub',
      description: 'Space Travelers Hub is a cutting-edge React application that empowers users to effortlessly book and cancel rocket reservations. Leveraging API integration.',
      technologies: ['React', 'Redux', 'CSS'],
      source: 'https://github.com/demix007/Space-travelers-hub',
      demo: 'https://space-travelers-hub-eta.vercel.app/',
    },
    {
      id: 2,
      image: Bookstore,
      title: 'Bookstore',
      description: 'Book Store is a React app for seamless book and author management, seamlessly integrating with an API. Users can efficiently add and remove books with ease, ensuring a smooth experience for book enthusiasts.',
      technologies: ['React', 'Redux', 'CSS'],
      source: 'https://github.com/demix007/bookstore-app',
      demo: 'https://bookstore-cyan.vercel.app/',
    },
    {
      id: 3,
      image: AwesomeBooks,
      title: 'Awesome Books',
      description: 'Awesome Books is a professional JavaScript application that enables users to efficiently add and remove books from a list, providing a seamless experience for book management.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/Awesome-Books-ES6',
      demo: 'https://awesome-books-es-6-chi.vercel.app/',
    },
    {
      id: 4,
      image: Leaderboard,
      title: 'Leaderboard App',
      description: 'Here, I set up a JavaScript project for the Leaderboard list app, using webpack and ES6. I developed the app following a wireframe, and consumed the Leaderboard API using JavaScript async and await.',
      technologies: ['React', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/Leaderboard',
      demo: 'https://enchanting-pavlova-7392f8.netlify.app/',
    },
    {
      id: 5,
      image: CountryFinder,
      title: 'Global Country Finder',
      description: 'This project is a react web application which has accessible data for different countries around the world. These data include region, name, population, sub-region, capital and more.Countries can be searched or filtered by region.',
      technologies: ['React', 'Redux', 'Bootstrap', 'CSS'],
      source: 'https://github.com/demix007/global-country-finder',
      demo: 'https://global-country-finder.vercel.app/',
    },
    {
      id: 6,
      image: CarRentals,
      title: 'Awesome Books',
      description: 'Awesome Books is a professional JavaScript application that enables users to efficiently add and remove books from a list, providing a seamless experience for book management.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/car-rentals-backend',
      demo: 'https://cars-rental-front-end-rose.vercel.app/',
    },
  ];
};
export default Portfolio;

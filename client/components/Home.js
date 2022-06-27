import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1>Welcome to YouChef!</h1>
        <h3>Hire your perfect Chef!</h3>
      </main>
      <div>
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"/>
        <Link to="/home">
          <p>
            <button type="button">
              Start
            </button>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;

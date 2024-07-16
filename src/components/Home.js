import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Adjusted import path based on your project structure

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to the Ethereum Validator Tracker</h2>
        <p>
          This application helps you track the status and details of Ethereum validators.
          Use the navigation links to explore the functionalities of the application, such as checking validator statuses and monitoring attestations.
        </p>
        <div className="home-buttons">
          <Link to="/validator-tracker" className="home-button">Validator Tracker</Link>
          <Link to="/top-validators" className="home-button">Top Validators</Link>
          <Link to="/about" className="home-button">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

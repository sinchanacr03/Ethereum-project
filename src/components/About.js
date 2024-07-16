import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About</h2>
       
        <p>
       <b> What is the Ethereum Validator Tracker?</b><hr />
The Ethereum Validator Tracker is a comprehensive tool designed to monitor and track the performance and status of Ethereum validators. Validators are crucial components of the Ethereum network, responsible for proposing and attesting to new blocks in the blockchain. This application provides valuable insights and real-time data to help users understand the performance and health of individual validators as well as the network as a whole.
        </p>
        <p>
       <b> How It Works</b><hr/>
        The Ethereum Validator Tracker leverages data from the Beacon Chain, Ethereum's consensus layer, which manages the validators and their activities. The application fetches data through APIs provided by beaconcha.in, ensuring accurate and up-to-date information.
        </p>
        <p>
          <b>Why Use the Ethereum Validator Tracker?</b><hr/>
          <li><b>Transparency:</b> Provides a clear view of validator performance, promoting transparency within the Ethereum network.</li>
          <li><b>Decision Making:</b> Helps stakers and potential validators make informed decisions based on performance metrics.</li> 
          <li><b>Network Health:</b> Offers insights into the overall health and efficiency of the Ethereum network by analyzing validator data. </li> 
          
          </p> 
          <p>
          <b>Conclusion</b><hr/> 
          The Ethereum Validator Tracker is an essential tool for anyone involved in Ethereum staking or interested in the health and performance of the network. By providing detailed and real-time data, it empowers users with the information needed to participate effectively in Ethereum's decentralized ecosystem.</p>   
      </div>
    </div>
  );
};

export default About;

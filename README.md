Ethereum Validator Tracker

 Overview
The Ethereum Validator Tracker is a React-based web application designed to monitor and track the performance and status of Ethereum validators. Validators play a crucial role in the Ethereum network by proposing and attesting to new blocks on the blockchain. This application provides real-time insights and detailed metrics to help users understand validator performance and the health of the network.

Features
Validator Performance Monitoring: View detailed performance metrics for individual validators, including balance and performance over various time periods.
   Top Validators: Explore a leaderboard of the top 10 performing validators, showcasing their rank, balance, and performance statistics.
   Validator Details: Enter a specific validator ID to fetch detailed information about its performance, status, and key metrics.
   User-Friendly Interface: Clean and intuitive design for easy navigation and data visualization.
   Responsive Design: Optimized for both desktop and mobile devices.

Pages
   Home
     Introduction to the application and its primary features.
   Validator Tracker 
     Allows users to enter a validator ID and fetch detailed information about the validator's performance and status.
   Top Validators
     Displays a leaderboard of the top 10 validators based on their performance metrics.
   About
     Provides detailed information about the application, its features, and its significance.
   Help
     Offers assistance and answers to common questions.
   
Getting Started
   Prerequisites
   Node.js
   npm (Node Package Manager)

   Installation
      Clone the repository:git clone https://github.com/sinchanacr03/Ethereum-project.git
      Navigate to the project directory:cd ethereum-validator-tracker
      Install the dependencies:npm install
      Running the Application:npm start

API Endpoints
  Validator Leaderboard: https://beaconcha.in/api/v1/validator/leaderboard
  Validator Details: https://beaconcha.in/api/v1/validator/{validatorId}
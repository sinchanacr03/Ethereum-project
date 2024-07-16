import React from 'react';
import './Help.css'; 

const Help = () => {
  return (
    <div className="help-content">
      <h2>Help</h2>
      <p>Welcome to the help page! Here you can find information on how to use the Ethereum Validator Tracker application.</p>
      <p>If you have any questions or encounter any issues, please refer to the following resources:</p>
      <ul>
        <li><strong>Validator Tracker:</strong> Enter the validator ID to track the status and performance of an Ethereum validator.</li>
        <li><strong>Top Validators:</strong> View the top 10 performing validators based on their balance and performance metrics.</li>
        <li><strong>About:</strong> Learn more about the Ethereum Validator Tracker application and its features.</li>
      </ul>
      <p>For further assistance, you can contact our support team at support@example.com.</p>
    </div>
  );
};

export default Help;

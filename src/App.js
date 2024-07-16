// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ValidatorTracker from './components/ValidatorTracker';
import TopValidators from './components/TopValidators';
import About from './components/About';
import './App.css';
import Help from './components/Help';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/validator-tracker" element={<ValidatorTracker />} />
              <Route path="/validator-tracker/:validatorId" element={<ValidatorTracker />} />
              <Route path="/about" element={<About />} />
              <Route path="/top-validators" element={<TopValidators />} />
              <Route path="/help" element={<Help />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

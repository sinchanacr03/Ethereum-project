import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <h2>Navigator</h2> */}
      <NavLink to="/" className="sidebar-button" activeClassName="active"> > Home</NavLink>
      <NavLink to="/validator-tracker" className="sidebar-button" activeClassName="active"> > Validator Tracker</NavLink>
      <NavLink to="/top-validators" className="sidebar-button" activeClassName="active"> > Top Validators</NavLink>
      <NavLink to="/about" className="sidebar-button" activeClassName="active"> > About</NavLink>
      <NavLink to="/help" className="sidebar-button" activeClassName="active"> > Help</NavLink>
    </div>
  );
};

export default Sidebar;

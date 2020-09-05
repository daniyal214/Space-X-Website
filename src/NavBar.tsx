import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/launch">Launch</Link>
      <Link to="/rockets">Rockets</Link>
      <Link to="/ships">Ships</Link>
    </div>
  );
}

export default NavBar;
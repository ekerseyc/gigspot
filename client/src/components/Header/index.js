import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Gig Spot</h1>
        </Link>
      </div>
      <div>
        <p>Mission Statement</p>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Logo from '../../assets/Logo.svg';

const Header = () => {
  return (
    <header className='header'>
        <Link to="/">
          <img src={Logo} alt='' style={{ marginLeft: '5px', float: 'left' }} />
        </Link>
        <Navbar />
      <Link to='/' className='btn-primary'>Post a gig</Link>
    </header>
  );
};

export default Header;

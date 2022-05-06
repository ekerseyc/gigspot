import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Logo from '../../assets/Logo.svg';
import Auth from '../../utils/auth';

const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={Logo} alt='' style={{ marginLeft: '5px' }} />
      </Link>
      <div>
        <Navbar />
        {Auth.loggedIn() ? (
          <Link to='/post' className='btn-primary'>Post a gig</Link>

        ) : (
          <>
            <Link to="/signup"></Link>
            <Link to="/login"></Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

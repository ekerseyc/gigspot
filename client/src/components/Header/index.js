import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import styled from 'styled-components'
import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <Link to="/">
          <img src={Logo} alt='' style={{marginLeft: '5px', float: 'left'}}/>
        </Link>
        <Navbar />
      <button className='btn-primary'>Post a gig</button>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;

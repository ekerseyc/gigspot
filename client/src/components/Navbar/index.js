import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import styled from 'styled-components';

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
&:hover {
  color: #FFE45E;
}
`;

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <>
        <StyledLink to="/me">
          {Auth.getProfile().data.username}'s profile
        </StyledLink>
        <button onClick={logout}>
          Logout
        </button>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <StyledLink to="/login">
        Login
      </StyledLink> &nbsp;
      <StyledLink to="/signup">
        Signup
      </StyledLink>
    </>
  )
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import styled from 'styled-components';
import './navbar.css';

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
&:hover {
  color: #FFE45E;
}
font-size: large;
`;

// const LogoutBtn = styled.button`
//   background: #273246;
//   font-size: medium;
//   color: white;
//   padding: 3px;
//   border: none;
//   border-radius: 4px;
//   &:focus {
//     background: white;
//     font-size: medium;
//     color: #273246;
//     padding: 3px;
//     border: none;
//     border-radius: 4px;
//  }
// `;

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <Link className="styledLink" to="/me">
          {Auth.getProfile().data.username}'s profile &nbsp;
        </Link>
        <button className="logoutBtn" onClick={logout}>
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

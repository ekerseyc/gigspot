// Node Modules
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
import { QUERY_USERS, QUERY_USER, QUERY_ME } from "../utils/queries";
// Components
import UserList from "../components/UserList";
import styled from 'styled-components';
import SearchList from "../components/SearchList";
import {  GoLocation } from 'react-icons/go';

// styled const
const ProfileWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 10px;
`;

const ProfileDiv = styled.div`
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 50%;
height: 50%;
padding: 10px;
`;

const UL = styled.ul`
list-style: none;
`

const Username = styled.li`
font-size: x-large;
font-weight: bold;
`
const H2 = styled.h2`
text-align: center;
padding-top: 10px;
`

const Email = styled.li`
font-style: italic;
`

const Profile = () => {
  const { id } = useParams();
  console.log(id);

  // Get current user
  const queryToRun = id ? QUERY_USER : QUERY_ME;
  const { loading, error, data } = useQuery(queryToRun, {
    variables: { _id: id },
  });

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);
  console.log(usersData);

  const user = data?.me || data?.user || {};
 
  const users = data?.users || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (id && !user?.username) {
    return (
      <h4>
        {/* You need to be logged in to see this. Use the navigation links above to
        sign up or log in! */}
        User not found!
      </h4>
    );
  }

  const renderCurrentUserInfo = () => {
    if (!users || !user) return <p>Not Found</p>;
    return (
      <>
        <UL>
          <Username>{user.username}</Username>
          <Email>{user.email}</Email>
          <li><GoLocation /> {user.location}</li>
          <li>Info: {user.description}</li>
        </UL>
        <div>
          <h3>Your Posts:</h3>
          {user.posts?.length > 0 && <SearchList posts={user.posts} />}
        </div>
      </>
    );
  };

  return (
    <div>
      <H2>Viewing {users? `${user.username}'s` : "your"} profile.</H2>
    <ProfileWrapper>
      <ProfileDiv>
        {renderCurrentUserInfo()}
      </ProfileDiv>
    </ProfileWrapper>
    </div>
  );
};

export default Profile;

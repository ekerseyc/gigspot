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

// styled const
const H2 = styled.h2`
text-align: center;
`
const Username = styled.li`
font-size: large;
font-weight: bold;
;
`

const Email = styled.li`
font-style: italic;
`

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const queryToRun = id ? QUERY_USER : QUERY_ME;
  const { loading, error, data } = useQuery(queryToRun, {
    variables: { _id: id },
  });

  console.log(data);
  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  console.log(data);
  const users = usersData?.users || [];

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

  const renderUserList = () => {
    if (usersLoading) return null;
    // Only renders users who's profile we're not currently viewing
    const notMeUsers = users.filter((o) => o._id !== user._id);
    return <UserList users={notMeUsers} title="User List" />;
  };

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <>
      <ul>
        <Username>{user.username}</Username>
        <Email>{user.email}</Email>
        <li>location: {user.location}</li>
        <li>description: {user.description}</li>
      </ul>
      <div>
        <h3>Your Posts:</h3>
      {user.posts?.length > 0 && <SearchList posts={user.posts} />}
      </div>
      </>
    );
  };

  console.log('user', user.posts);
  return (
    <div>
        <H2>Viewing {id ? `${user.username}'s` : "your"} profile.</H2>
      <div className="profileCon">
        {renderCurrentUserInfo()}
        {renderUserList()}
      </div>
    </div>
  );
};

export default Profile;

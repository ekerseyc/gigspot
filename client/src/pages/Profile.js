// Node Modules
import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
import { QUERY_USERS, QUERY_USER, QUERY_ME } from "../utils/queries";
import { EDIT_USER } from "../utils/mutations";
// Components
import UserList from "../components/UserList";
import styled from 'styled-components';
import SearchList from "../components/SearchList";
import { GoLocation } from 'react-icons/go';


// styled const
const ProfileWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 10px;
`;

const ProfileDiv = styled.div`
background: #76A7F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 50%;
height: 50%;
padding: 10px;
`;

const UL = styled.ul`
list-style: none;
color: white;
`;

const Username = styled.li`
font-size: x-large;
font-weight: bold;
`;

const H2 = styled.h2`
text-align: center;
padding-top: 10px;
`;

const Email = styled.li`
font-style: italic;
`;

const H3 = styled.h3`
text-align: center;
padding-top: 10px;
color: white;
font-weight: lighter;
`;

const Profile = () => {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    location: '',
    description: '',
  })

  // Get current user
  const queryToRun = id ? QUERY_USER : QUERY_ME;
  const { loading, error, data } = useQuery(queryToRun, {
    variables: { userId: id },
  });
  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};

  useEffect(() => {
    setFormState({
      username: user.username,
      email: user.email,
      location: user.location,
      description: user.description,
    })
  }, [data]);

  const [editUser, { data: userData }] = useMutation(EDIT_USER);

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
    console.log(user)
    return (
      <h4>
        User not found!
      </h4>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);

    try {
      const { userData } = await editUser({
        variables: { ...formState },
      });

    } catch (error) {
      console.log(error);
    }
  }

  const renderCurrentUserInfo = (editing, setEditing) => {
    if (!users || !user) return <p>Not Found</p>;
    return (
      <>
        <UL>
          {editing ? <input name="username" value={formState.username} onChange={handleChange}/> : <Username>{user.username}</Username>}
          {editing ? <input name="email" value={formState.email} onChange={handleChange}/> : <Email>{user.email}</Email>}
          {editing ? <input name="location" value={formState.location} onChange={handleChange}/> : <li><GoLocation /> {user.location}</li>}
          {editing ? <input name="description" value={formState.description} onChange={handleChange}/> : <li>Info: {user.description}</li>}
        </UL>
        {!id && !editing && <button onClick={() => setEditing(true)}>Edit Profile</button>}
        {!id && editing && <button onClick={(event) => handleEditSubmit(event)}>Done</button>}
        <div>
          <H3>Your Posts:</H3>
          {user.posts?.length > 0 && <SearchList posts={user.posts} />}
        </div>
      </>
    );
  };

  return (
    <div>
      <H2>Viewing {id ? `${user.username}'s` : "your"} profile.</H2>
      <ProfileWrapper>
        <ProfileDiv>
          {renderCurrentUserInfo(editing, setEditing)}
        </ProfileDiv>
      </ProfileWrapper>
    </div>
  );
};

export default Profile;

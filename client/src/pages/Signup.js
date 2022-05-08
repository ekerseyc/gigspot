import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// styled const
const SignUpWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 10px;
`;

// const SignUpDiv = styled.div`
// background: #F9F9F9;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 10px;
// width: 25%;
// height: 50%;
// padding: 10px;
// `;

const H3 = styled.h3`
text-align: center;
padding-top: 10px;
`;

const UserInput = styled.input`
width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  `;

const EmailInput = styled.input`
width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
`;

const PasswordInput = styled.input`
width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
`;

const SignUpBtn = styled.button`
background: #6EBEED;
 font-size: large;
 color: white;
 padding: 10px 20px;
 border: none;
 border-radius: 4px;
 margin-top: 10px;
`;

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
      <p>
        Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
      </p>
      )
    } 
    return (
      <form onSubmit={handleFormSubmit}>
        <UserInput
          placeholder="Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
        <EmailInput
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <PasswordInput
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <SignUpBtn type="submit">
          Submit
        </SignUpBtn>
      </form>
    );
  };

  return (
    <main>
      <H3>Sign Up</H3>
      <SignUpWrapper>
      <div className="signUpDiv">
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
      </SignUpWrapper>
    </main>
  );
};

export default Signup;

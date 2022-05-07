import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_POST } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import styled from 'styled-components';
import { useEffect } from 'react/cjs/react.production.min';

// import Auth from '../utils/auth';

// styled const
const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
`;

const PostDiv = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 50%;
  height: 50%;
  padding: 10px;
`;

const H3 = styled.h3`
  text-align: center;
  padding-top: 10px;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const CatInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
`;

const DescInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
`;

const SubmitBtn = styled.button`
  background: #6ebeed;
  font-size: large;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  float: right;
`;

const PostForm = () => {

  const [createPost, { error, data }] = useMutation(CREATE_POST);
  const { loading, error: meError, data: meData } = useQuery(QUERY_ME);
  console.log(meData)


  const [formState, setFormState] = useState({
    description: '',
    category: '',
  });

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
      const { data } = await createPost({
        variables: { ...formState },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (data) {
    return (
      <p>
        Success! You may now head <Link to="/">back to the homepage.</Link>
      </p>
    );
  }

  return (
    <main>
      <H3>Post a gig</H3>
      <PostWrapper>
        <PostDiv>
          <form onSubmit={handleFormSubmit}>
            <div>
              <NameInput
                placeholder="Name..."
                name="author"
                value={formState.author}
                onChange={handleChange}
              />
              <CatInput
                placeholder="Category..."
                name="category"
                value={formState.category}
                onChange={handleChange}
              />
              <DescInput
                placeholder="Description (date, time, etc)..."
                name="description"
                value={formState.description}
                onChange={handleChange}
              />
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </div>
          </form>
        </PostDiv>
      </PostWrapper>
    </main>
  );
};

export default PostForm;

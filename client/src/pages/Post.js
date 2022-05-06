import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../utils/mutations';

import Auth from '../utils/auth';

const PostForm = () => {
  const [formState, setFormState] = useState({
    author: '',
    description: '',
    category: '',
  });

  const [createPost, { error, data }] = useMutation(CREATE_POST);

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
      })
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  }

  if (data) {
    return (
    <p>
      Success! You may now head{' '}
      <Link to="/">back to the homepage.</Link>
    </p>
    )
  } 

  return (
    <main>
      <p>Post a gig</p>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            placeholder="Name..."
            name="author"
            value={formState.author}
            onChange={handleChange}
          />
          <input
            placeholder="Description..."
            name="description"
            value={formState.description}
            onChange={handleChange}
          />
          <input
            placeholder="Category..."
            name="category"
            value={formState.category}
            onChange={handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default PostForm;
// Node Modules
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
// Utilities
// import Auth from '../utils/auth';
// import { QUERY_USERS } from '../utils/queries';
import { QUERY_POSTS } from '../utils/queries';


// Components

import UserList from '../components/UserList';
import Header from '../components/Header';

import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  // Set state for the search result and the search query
  const [initialPosts, setInitialPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [input, setInput] = useState([]);
  
  const { loading, data } = useQuery(QUERY_POSTS);
  // Set both initial and filtered from what is given back from the query (all posts)
  useEffect(() => {
    setInitialPosts(data?.post);
    setFilteredPosts(data?.post);
  }, [data]);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setInput("");

    if (input === "") {
      setFilteredPosts(initialPosts);
      return
    }

    // Filter posts by the category that is input in the search bar
    setFilteredPosts(initialPosts.filter(post => post.category.toLowerCase() === input.toLowerCase()));
  }

  return (
    <>
        <main>
      <div>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          setInput={setInput}
          input={input}
        />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <SearchList
            posts={filteredPosts}
          />
        )}
      </div>
    </main>
    </>
  );
};

export default Home;

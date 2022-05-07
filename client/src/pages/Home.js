// Node Modules
import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
// Utilities
import Auth from '../utils/auth';
import { QUERY_POSTS } from '../utils/queries';


// Components
import Mission from '../components/Mission';

import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  const { loading, data } = useQuery(QUERY_POSTS);
  console.log("data", data)
  // const posts = data?.post || [];
  // console.log(posts);

  const [initialPosts, setInitialPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

    // Set both initial and filtered from what is given back from the query (all posts)
    useEffect(() => {
      setInitialPosts(data?.post);
      setFilteredPosts(data?.post);
    }, [data?.post]);

  return (
    <>
      <main>
        {!Auth.loggedIn() ? (
      <div>
        <Mission />
      </div>
        ) : (
        <div>
          <SearchForm
          posts={initialPosts}
          setFilteredPosts={setFilteredPosts}
          />

          {loading ? (
            <div>Loading...</div>
          ) : (
            <SearchList
              posts={filteredPosts}
            />
          )}
      </div>
        )}
    </main>
    </>
  );
};

export default Home;

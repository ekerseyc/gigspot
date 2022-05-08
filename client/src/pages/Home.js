// Node Modules
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
// Utilities
import Auth from "../utils/auth";
// import { QUERY_USERS } from '../utils/queries';
import { QUERY_POSTS } from "../utils/queries";

// Components

import UserList from "../components/UserList";
import Header from "../components/Header";
import Mission from "../components/Mission";

import SearchForm from "../components/SearchForm";
import SearchList from "../components/SearchList";
import Post from "./Post";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.post || [];
  console.log('posts:', posts);

  const [initialPosts, setInitialPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Set both initial and filtered from what is given back from the query (all posts)
  useEffect(() => {
    setInitialPosts(posts);
    setFilteredPosts(posts);
  }, [posts]);


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
              <SearchList posts={filteredPosts} />
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;

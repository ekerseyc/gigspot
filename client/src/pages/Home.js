// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
import { QUERY_POSTS } from '../utils/queries';


// Components
import UserList from '../components/UserList';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  const { loading, data } = useQuery(QUERY_POSTS);
  console.log(data);
  const posts = data?.post || [];
  console.log(posts);

  const renderSearchForm = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      // Search form
      return <SearchForm />
    }
  } 

  const renderSearchList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      // Search form
      return <SearchList posts={posts} />
    }
  } 

  return (
    <main>
      <div>
        {renderSearchForm()}
        {renderSearchList()}
      </div>
    </main>
  );
};

export default Home;

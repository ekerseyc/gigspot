import React from 'react';
// import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h2>No Posts Yet...</h2>
  }
  return (
    <div>
      <h3>{posts &&
        posts.map((post) => (
          <div key={post._id}>
            <h4>{post.author}</h4>
            <p>{post.description}</p>
          </div>
        ))
      }
      </h3>
    </div>
  );
};

export default PostList;
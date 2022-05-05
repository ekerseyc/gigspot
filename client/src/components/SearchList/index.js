import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  console.log(posts);
  if (!posts?.length) {
    return <h2>No Posts Yet...</h2>
  }
  return (
    <div>
      <h3>{posts &&
        posts.map((post) => (
          <div key={post._id}>
            <Link
            to={`/users/`}>
            {post.author}
            </Link>
            <p>{post.description}</p>
          </div>
        ))
      }
      </h3>
    </div>
  );
};

export default PostList;
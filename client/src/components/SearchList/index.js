import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ posts }) => {
  console.log(posts);
  if (!posts?.length) {
    return <h2>No Posts Yet...</h2>;
  }
  return (
    <div>
      <h3>
        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <Link to={`/users/${post.user?._id}`}>{post.author}</Link>
              <p>{post.description}</p>
            </div>
          ))}
      </h3>
    </div>
  );
};

export default SearchList;

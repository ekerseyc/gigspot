import React, { useState, useEffect } from 'react';

/* 
TODO: Search by category 
TODO: Render posts by input category
TODO: Include users and their rating
TODO: The username is a link to their profile
TODO: There is a button to request a booking
*/

function SearchForm({ posts, setFilteredPosts }) {
  // Set state for the search result and the search query
  const [input, setInput] = useState([]);


  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setInput("");

    if (input === "") {
      setFilteredPosts(posts);
      return
    }

    // Filter posts by the category that is input in the search bar
    console.log(posts.filter(post => post.category.toLowerCase() === input.toLowerCase()))
    setFilteredPosts(posts.filter(post => post.category.toLowerCase() === input.toLowerCase()));
  }
 
  return (
    <>
    <div className='searchBox'>
      <h2 className='searchH2'>Find your next gig in the Carolinas!</h2>
      <form className='searchForm'>
        <input
          value={input}
          name="category"
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Search"
        />
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
      </form>
      </div>
    </>
  );
}

export default SearchForm;
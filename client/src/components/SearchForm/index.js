import React, { useState } from 'react';
/* 
TODO: Search by category 
TODO: Render posts by input category
TODO: Include users and their rating
TODO: The username is a link to their profile
TODO: There is a button to request a booking
*/

function SearchForm({ handleFormSubmit, setInput, input }) {
  
  return (
    <>
    <h2>What are you looking for today?</h2>
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
    </>
  );
}

export default SearchForm;
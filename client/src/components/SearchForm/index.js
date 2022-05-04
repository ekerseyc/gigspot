import React, { useState } from 'react';
/* 
TODO: Search by category 
TODO: Render posts by input category
TODO: Include users and their rating
TODO: The username is a link to their profile
TODO: There is a button to request a booking
*/

function SearchForm() {
  const [category, setCategory] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'category') {
      setCategory(value);
    };
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    alert(`Searching for ${category}`);
    setCategory('');
  }

  return (
    <>
    <h2>What are you looking for today?</h2>
      <form className='searchForm'>
        <input
          value={category}
          name="category"
          onChange={handleInputChange}
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
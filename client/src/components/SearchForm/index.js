import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// styled const
const H2 = styled.h2`
text-align: center;
padding-top: 10px;
`;

const H3 = styled.h3`
text-align: center;
padding-bottom: 10px;
`;

const SearchWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 10px;
`;

const SearchDiv = styled.div`
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 50%;
height: 50%;
padding: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-size: large;
`;

const SearchBtn = styled.button`
  background: #6EBEED;
  font-size: large;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  float: right;
  &:focus {
    background: white;
  font-size: large;
  color: #6EBEED;
  padding: 10px 20px;
  border: 1px solid #6EBEED;
  border-radius: 4px;
  margin-top: 10px;
  float: right;
}
`;

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
      <H2 className='searchH2'>Find your next gig in the Carolinas!</H2>
      <SearchWrapper>
    <SearchDiv className='searchBox'>
      <H3>I'm looking for...</H3>
      <form className='searchForm'>
        <SearchInput
          value={input}
          name="category"
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Search"
          />
      <SearchBtn type="button" onClick={handleFormSubmit}>
        Submit
      </SearchBtn>
      </form>
      </SearchDiv>
          </SearchWrapper>
    </>
  );
}

export default SearchForm;
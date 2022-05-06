import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Create card style
// 1. Title needs new font, change content later
// 2. Location
// 3. Date
// 4. Description
// 5. Apply button
// CSS grid to put them on the page


// Sample styled components
// const StyledCounter = styled.div`
//   /* ... */
// `;

// so user shouldn't be part of the info, but when you click the button to apply it should send to the user page...

// Flex structure and container styling
const PostContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const PostDiv = styled.div`
height: 100px;
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 445px;
height: 273px;
`;


// Post contents in order
const PostTitle = styled.h3`
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 42px;
text-align: center;
`;

const PostLocation = styled.h4`
`;

const PostDate = styled.h4`
`;

const PostDescription = styled.p`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;


const PostList = ({ posts }) => {
  console.log(posts);
  if (!posts?.length) {
    return <h2>No Posts Yet...</h2>
  }
  return (
    <PostContainer>
      <div>{posts &&
        posts.map((post) => (
          <PostDiv key={post._id}>
            <PostTitle> 
              <StyledLink
                to={`/users/`}>
               {post.author}
              </StyledLink>
            </PostTitle>
            <PostLocation> <FontAwesomeIcon icon={["far", "coffee"]} />Charlotte Location</PostLocation>
            <PostDate>Time Date</PostDate>
            <PostDescription>{post.description}</PostDescription>
          </PostDiv>
        ))
      }
      </div>
    </PostContainer>
  );
};

export default PostList;
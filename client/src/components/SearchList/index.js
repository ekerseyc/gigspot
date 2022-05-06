import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {  GoLocation } from 'react-icons/go';
import {  BsCalendarWeek } from 'react-icons/bs';


// Create card style
// 1. Title needs new font, change content later
// 2. Location
// 3. Date
// 4. Description
// 5. Apply button
// CSS grid to put them on the page

// reference code
//      <h3>
//         {posts &&
//           posts.map((post) => (
//             <div key={post._id}>
//               {post.user?.username && <Link to={`/users/${post.user?._id}`}>{post.user.username}</Link>}
//               <p>{post.description}</p>
//             </div>
//           ))}
//       </h3>
//     </div>


// Sample styled components
// const StyledCounter = styled.div`
//   /* ... */
// `;

// so user shouldn't be part of the info, but when you click the button to apply it should send to the user page...

// Flex structure and container styling
const PostWrapper = styled.div`
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
font-size: 24px;
`;

const PostDate = styled.h4`
font-size: 24px;
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


const SearchList = ({ posts }) => {
  console.log('posts', posts);
  if (!posts?.length) {
    return <h2>No Posts Yet...</h2>;
  }
  return (
    <div>
      <PostWrapper>{posts &&
        posts.map((post) => (
          <PostDiv key={post._id}>
            <PostTitle> 
              <StyledLink
                {post.user?.username && <Link to={`/users/${post.user?._id}`}>{post.user.username}</Link>}>
               {post.author}
              </StyledLink>
            </PostTitle>
            <PostLocation><GoLocation />  Charlotte Location</PostLocation>
            <PostDate><BsCalendarWeek />  Time Date</PostDate>
            <PostDescription>{post.description}</PostDescription>
          </PostDiv>
        ))
      }
      </PostWrapper>
    </div>
  );
};

export default SearchList;

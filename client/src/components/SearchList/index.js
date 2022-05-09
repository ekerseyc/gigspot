import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { BsCalendarWeek } from "react-icons/bs";

import { REMOVE_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
// Put data in styling, put in button that links to user page
// CSS grid to put them on the page

// reference code
//   <h3>
//         {posts &&
//           posts.map((post) => (
//             <div key={post._id}>
//               <Link to={`/users/${post.user?._id}`}>{post.author}</Link>
//               <p>{post.description}</p>
//             </div>
//           ))}
//       </h3>
//     </div>

// so user shouldn't be part of the info, but when you click the button to apply it should send to the user page...

// Flex structure and container styling
const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  padding-bottom: 10px;
`;

const PostDiv = styled.div`
  height: 100px;
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 445px;
  height: 273px;
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 5px;
`;

const H2 = styled.h2`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
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


const GigBtn = styled.button`
  background: #6ebeed;
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
    color: #6ebeed;
    padding: 10px 20px;
    border: 1px solid #6ebeed;
    border-radius: 4px;
    margin-top: 10px;
  }
  `;
  
  
  const SearchList = ({ posts }) => {
    console.log(posts)
    
    const [removePost, { error }] = useMutation(REMOVE_POST);
    
    const handleDeletePost = async (postId) => {
      console.log(postId)
      try {
        const response = await removePost({
          variables: { postId: postId },
        })

        removePost(postId)
      } catch (error) {
        console.log(error)
      }
    }

const StyledButton = styled(Link)`
text-decoration:none;

`;


  if (!posts?.length) {
    return <H2>No Posts Yet...</H2>;
  }
  return (
    <>
      <div className="wrapper">
        <PostWrapper>

          {posts &&
            posts.map((post) => (
              <PostDiv key={post._id}>
                <PostTitle>
                  {post.user?.username && (
                    <StyledLink to={`/users/${post.user?._id}`}>
                      {post.user.username}
                    </StyledLink>
                  )}
                  {post.author}
                </PostTitle>
                <PostLocation>
                  <GoLocation /> {post.location}
                </PostLocation>
                <PostDate>
                  <BsCalendarWeek /> {post.date}
                </PostDate>
                <PostDescription>{post.description}</PostDescription>
                {window.location.pathname.includes("/me") && <button onClick={() => handleDeletePost(post._id)}>Delete</button>}
              </PostDiv>
            ))}


          {posts && posts.map((post) => (
            <PostDiv key={post._id}>
              <PostTitle>
                {post.user?.username && <StyledLink to={`/users/${post.user?._id}`}>{post.user.username}</StyledLink>}
                {post.author}
              </PostTitle>
              <PostLocation><GoLocation /> {post.location}</PostLocation>
              <PostDate><BsCalendarWeek /> {post.date}</PostDate>
              <PostDescription>{post.description}</PostDescription>
              <StyledButton to='/apply' className='btn-gig'>Apply to Gig</StyledButton>
            </PostDiv>
          ))
          }

        </PostWrapper>
        <div className="push"></div>
      </div>
    </>
  );
};

export default SearchList;

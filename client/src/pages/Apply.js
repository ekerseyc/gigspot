import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';

// import Auth from '../utils/auth';

// styled const
const PostWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 10px;
`;

const PostDiv = styled.div`
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 50%;
height: 50%;
padding: 10px;
`;

const H3 = styled.h3`
text-align: center;
padding-top: 10px;
`;

const Message = styled.textarea`
width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  `;

const SubmitBtn = styled.button`
background: #6EBEED;
 font-size: large;
 color: white;
 padding: 10px 20px;
 border: none;
 border-radius: 4px;
 margin-top: 10px;
 float: right;
`;

// const ApplyGig = () => {
//   const [formState, setFormState] = useState({
//     description: ''
//   });


//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await applyGig({
//         variables: { ...formState },
//       })
//       console.log(data)
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   if (data) {
//     return (
//     <p>
//       Success! You may now head{' '}
//       <Link to="/">back to the homepage.</Link>
//     </p>
//     )
//   } 

//   return (
//     <main>
//       <H3>Apply to Gig</H3>
//       <PostWrapper>
//         <PostDiv>

//       <form onSubmit={handleFormSubmit}>
        
//         <div>
//           <Message
//             placeholder="Write a message here!"
//             name="description"
//             value={formState.author}
//             onChange={handleChange}
//             />
//           <SubmitBtn type="submit">
//             Submit
//           </SubmitBtn>
//         </div>
//       </form>
//             </PostDiv>
//             </PostWrapper>
//     </main>
//   );
// };

// export default ApplyGig;
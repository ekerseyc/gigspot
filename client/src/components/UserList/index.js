import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';

// const User = ({ _id, username }) => {
//   return (
//     <div key={_id}>
//       <h4>
//         <Link to={`/users/${_id}`}>
//           {username}
//         </Link>
//       </h4>
//     </div>
//   );
// };

const UserList = ({ users, title }) => {
  if (!users.length) return <h3>No Users</h3>;

  return (
    <>
      <h3>{title}</h3>
      <SearchForm />
    </>
  );
};

export default UserList;

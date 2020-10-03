import React from 'react';
import { Link } from 'react-router-dom';
import userDummy from './userDummy'
const Users = () => {
    return (
        <>
          {userDummy.map((user, index) => (
            <h4 key={index}>
              <Link to={`/Users/${index + 1}`}>{user.name}'s Page</Link>
            </h4>
          ))}
        </>
      );
};
export default Users;


import React from 'react';
import { useSelector } from 'react-redux';

export const Profiles = () => {
  // Access the correct part of the state
  const users = useSelector(state => state.user.users);

  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div>
      {users.map(user => (
        <div style={{ backgroundColor: "black", color: "white"}} key={user.id}>
          {user.fname} - {user.lname} - {user.email} - {user.password}
        </div>
      ))}
    </div>
  );
};

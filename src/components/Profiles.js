import React from 'react';
import { useSelector } from 'react-redux';

export const Profiles = () => {
    const users = useSelector(state => state.users); // Ensure 'users' is lowercase

    if (!users || users.length === 0) {
        return <div>No users found</div>;
    }

    return (
        <div>
            {users.map(user => (
                <div style={{ backgroundColor: "red" }} key={user.id}>
                    {user.fname} - {user.lname} - {user.email} - {user.password}
                </div>
            ))}
        </div>
    );
};

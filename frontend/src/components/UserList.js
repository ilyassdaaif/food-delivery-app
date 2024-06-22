import React, { useState, useEffect } from 'react';
import { getUsers, createUser } from './services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
	const data = await getUsers();
	setUsers(data);
      } catch (error) {
	console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const newUser = { name: 'New User', email: 'newuser@example.com' };
    try {
      const createdUser = await createUser(newUser);
      setUsers([...users, createdUser]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
	{users.map(user => (
	  <li key={user._id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  };
};

export default UserList;

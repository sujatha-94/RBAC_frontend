import React, { useState, useEffect } from 'react';
import AddEditUserModal from './AddEditUserModal';
import UserAction from './UserAction';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch the list of users from the mock API
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' })
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <UserAction
                  user={user}
                  onEdit={handleEditUser}
                  onDelete={handleDeleteUser}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && <AddEditUserModal user={selectedUser} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default UserManagement;


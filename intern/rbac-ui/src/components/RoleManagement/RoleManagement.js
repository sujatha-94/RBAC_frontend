import React, { useState, useEffect } from 'react';
import AddEditRoleModal from './AddEditRoleModal';
import RoleAction from './RoleAction';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    // Fetch the list of roles from the mock API
    fetch('http://localhost:3001/roles')
      .then(response => response.json())
      .then(data => setRoles(data))
      .catch(error => console.error('Error fetching roles:', error));
  }, []);

  const handleAddRole = () => {
    setSelectedRole(null);
    setIsModalOpen(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleDeleteRole = (id) => {
    fetch(`http://localhost:3001/roles/${id}`, { method: 'DELETE' })
      .then(() => {
        setRoles(roles.filter(role => role.id !== id));
      })
      .catch(error => console.error('Error deleting role:', error));
  };

  return (
    <div>
      <button onClick={handleAddRole}>Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{Array.isArray(role.permissions) ? role.permissions.join(', ') : 'No Permissions'}</td>
              <td>
                <RoleAction
                  role={role}
                  onEdit={handleEditRole}
                  onDelete={handleDeleteRole}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && <AddEditRoleModal role={selectedRole} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default RoleManagement;

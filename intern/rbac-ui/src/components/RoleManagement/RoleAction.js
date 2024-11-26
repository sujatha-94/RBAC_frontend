// src/components/RoleManagement/RoleAction.js

import React from 'react';

const RoleAction = ({ role, onEdit, onDelete }) => {
  return (
    <div>
      {/* Edit Button */}
      <button onClick={() => onEdit(role)}>Edit</button>
      
      {/* Delete Button */}
      <button onClick={() => onDelete(role.id)}>Delete</button>
    </div>
  );
};

export default RoleAction;  // Correct default export

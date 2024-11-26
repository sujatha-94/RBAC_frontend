/*import React, { useState } from "react";
import { Button } from "@mui/material";
import AddEditUserModal from "./AddEditUserModal"; // Modal component for adding/editing users
import AddEditRoleModal from "./AddEditRoleModal"; // Modal component for adding/editing roles

const UserRoleManagement = () => {
  const [currentUser, setCurrentUser] = useState({
    role: "Admin", // Hardcoded for testing, change to fetch from auth context
  });

  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [openAddRoleModal, setOpenAddRoleModal] = useState(false);

  // Sample roles to pass to AddEditUserModal
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Manager" },
    { id: 3, name: "User" },
  ];

  // Check if the current user has the role of Admin or Manager
  const canAddUser = currentUser.role === "Admin" || currentUser.role === "Manager";
  const canAddRole = currentUser.role === "Admin";

  const handleAddUserClick = () => {
    setOpenAddUserModal(true);
  };

  const handleAddRoleClick = () => {
    setOpenAddRoleModal(true);
  };

  return (
    <div>
      <h1>User and Role Management</h1>

      {/* Conditionally render "Add User" button *//*}
      {canAddUser && (
        <Button variant="contained" color="primary" onClick={handleAddUserClick}>
          Add User
        </Button>
      )}

      {/* Conditionally render "Add Role" button *//*}
      {canAddRole && (
        <Button variant="contained" color="secondary" onClick={handleAddRoleClick}>
          Add Role
        </Button>
      )}

      {/* Add/Edit User Modal *//*}
      <AddEditUserModal
        open={openAddUserModal}
        onClose={() => setOpenAddUserModal(false)}
        onSave={(user) => console.log("User Saved:", user)}
        user={{}} // Provide empty or existing user data
        roles={roles} // Pass roles array to the modal
        setUser={() => {}} // Function for handling user updates
      />

      {/* Add/Edit Role Modal *//*}
      <AddEditRoleModal
        open={openAddRoleModal}
        onClose={() => setOpenAddRoleModal(false)}
        onSave={(role) => console.log("Role Saved:", role)}
        role={{}} // Provide empty or existing role data
        roles={[]} // Provide roles if needed
        setRole={() => {}} // Function for handling role updates
      />
    </div>
  );
};

export default UserRoleManagement;*/




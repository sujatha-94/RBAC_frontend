import React from "react";
import { Modal, Box, Typography, TextField, Button, MenuItem } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const AddEditUserModal = ({ open, onClose, onSave, user, roles, setUser }) => {
  // Default roles to an empty array if undefined
  const validRoles = Array.isArray(roles) ? roles : [];

  const handleInputChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" gutterBottom>
          {user?.id ? "Edit User" : "Add User"}
        </Typography>
        <TextField
          fullWidth
          label="Name"
          value={user?.name || ""}
          onChange={(e) => handleInputChange("name", e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          value={user?.email || ""}
          onChange={(e) => handleInputChange("email", e.target.value)}
          margin="normal"
        />
        <TextField
          select
          fullWidth
          label="Role"
          value={user?.role || ""}
          onChange={(e) => handleInputChange("role", e.target.value)}
          margin="normal"
        >
          {validRoles.map((role) => (
            <MenuItem key={role.id} value={role.name}>
              {role.name}
            </MenuItem>
          ))}
        </TextField>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" onClick={() => onSave(user)}>
            Save
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEditUserModal;

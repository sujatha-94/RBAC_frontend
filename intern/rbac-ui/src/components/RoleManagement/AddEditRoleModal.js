import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Modal,
} from "@mui/material";

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

const AddEditRoleModal = ({
  open,
  onClose,
  onSave,
  role,
  roles = [], // Default to empty array to avoid undefined error
  setRole,
}) => {
  const handleInputChange = (field, value) => {
    setRole((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" gutterBottom>
          {role?.id ? "Edit Role" : "Add Role"}
        </Typography>
        <TextField
          fullWidth
          label="Role Name"
          value={role?.name || ""}
          onChange={(e) => handleInputChange("name", e.target.value)}
          margin="normal"
        />
        <TextField
          select
          fullWidth
          label="Select Parent Role"
          value={role?.parentRole || ""}
          onChange={(e) => handleInputChange("parentRole", e.target.value)}
          margin="normal"
        >
          {/* Ensure roles is an array before calling map */}
          {Array.isArray(roles) && roles.length > 0 ? (
            roles.map((roleItem) => (
              <MenuItem key={roleItem.id} value={roleItem.name}>
                {roleItem.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No roles available</MenuItem>
          )}
        </TextField>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="contained" onClick={() => onSave(role)}>
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

export default AddEditRoleModal;


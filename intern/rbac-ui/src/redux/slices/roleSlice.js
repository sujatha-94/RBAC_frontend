import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roles: [],
};

const roleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setRoles(state, action) {
      state.roles = action.payload;
    },
    addRole(state, action) {
      state.roles.push(action.payload);
    },
    editRole(state, action) {
      const index = state.roles.findIndex(role => role.id === action.payload.id);
      if (index >= 0) state.roles[index] = action.payload;
    },
    deleteRole(state, action) {
      state.roles = state.roles.filter(role => role.id !== action.payload);
    },
  },
});

export const { setRoles, addRole, editRole, deleteRole } = roleSlice.actions;
export default roleSlice.reducer;

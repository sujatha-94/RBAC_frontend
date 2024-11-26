import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Users API
export const fetchUsers = () => api.get('/users');
export const addUser = data => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = id => api.delete(`/users/${id}`);

// Roles API
export const fetchRoles = () => api.get('/roles');
export const addRole = data => api.post('/roles', data);
export const updateRole = (id, data) => api.put(`/roles/${id}`, data);
export const deleteRole = id => api.delete(`/roles/${id}`);

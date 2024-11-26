/*import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import roleReducer from './slices/roleSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    roles: roleReducer,
  },
});*/


// store.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  roles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle actions here
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

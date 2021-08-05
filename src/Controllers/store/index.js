import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import bugReducer from './bug-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: { auth: authReducer, bug: bugReducer, user: userReducer },
});

export default store;

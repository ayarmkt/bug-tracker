import { configureStore } from '@reduxjs/toolkit';
import bugReducer from './bug-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: { bugs: bugReducer, user: userReducer },
});

export default store;

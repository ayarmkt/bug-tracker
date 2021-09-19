import { configureStore } from '@reduxjs/toolkit';
import bugReducer from './bug-slice';
import uiReducer from './ui-slice';

const store = configureStore({
  reducer: { bugs: bugReducer,  ui: uiReducer },
});

export default store;

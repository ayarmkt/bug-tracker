import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { admin: false, loggedIn: false },
  reducers: {
    login(state, action) {
      const { name, password } = action.payload;
      state.loggedIn = true;
      state.admin = true;
      console.log(name, password, state.loggedIn);
    },
    logout(state) {
      state.loggedIn = false;
      state.admin = false;
    },
    createUser() {},
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

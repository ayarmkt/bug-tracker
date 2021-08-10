// import { createSlice } from '@reduxjs/toolkit';

// let initialToken;
// const tokenData = getStoredTokenAndExpirationTime();
// if (tokenData) {
//   initialToken = tokenData.token;
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { token: '', loggedIn: false },
//   reducers: {
//     login(state, action) {
//       const { name, password } = action.payload;
//       state.loggedIn = true;
//       state.admin = true;
//       setToken(token);

//           console.log(token);
//           localStorage.setItem('token', token);
//           localStorage.setItem('expirationTime', expirationTime);
//           const remainingDuration = calcRemainingTime(expirationTime);
//           logoutTimer = setTimeout(logoutHandler, remainingDuration);
//     },
//     logout(state) {
//       state.loggedIn = false;
//       state.admin = false;
//     },
//     createUser(state, action) {},
//   },
// });

// export default authSlice.reducer;
// export const { login, logout, createUser } = authSlice.actions;

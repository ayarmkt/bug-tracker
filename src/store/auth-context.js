import React from 'react';
import { useState } from 'react';

// const guestEmail = 'guest@guest.com';
// const guestPassword = 'guest1234';

// const loginAsGuest =()=>{
//   setEnteredValue(e.target.value);
//   setValueIsTouched(true);
// }

const AuthContext = React.createContext({
  token: '',
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    loggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { admin: false, loggedIn: false },
//   reducers: {
//     login(state, action) {
//       const { name, password } = action.payload;
//       state.loggedIn = true;
//       state.admin = true;
//       console.log(name, password, state.loggedIn);
//     },
//     logout(state) {
//       state.loggedIn = false;
//       state.admin = false;
//     },
//     createUser() {},
//   },
// });

// export default authSlice.reducer;
// export const authActions = authSlice.actions;

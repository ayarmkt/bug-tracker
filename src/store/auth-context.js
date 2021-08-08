import React from 'react';

import { useState, useCallback, useEffect } from 'react';

//SETTING
let logoutTimer;

//HELPER FUNCTION
const calcRemainingTime = (expireTime) => {
  const currentTime = new Date().getTime();
  const tokenExpireTime = new Date(expireTime).getTime();
  const remainingDuration = tokenExpireTime - currentTime;
  return remainingDuration;
};

const getStoredTokenAndExpirationTime = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationTime = localStorage.getItem('expirationTime');

  const newRemainingDuration = calcRemainingTime(storedExpirationTime);

  if (newRemainingDuration <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return { token: storedToken, duration: newRemainingDuration };
};

//CONTEXT
const AuthContext = React.createContext({
  token: '',
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let initialToken;
  const tokenData = getStoredTokenAndExpirationTime();
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token, expirationTime) => {
    setToken(token);

    console.log(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    const remainingDuration = calcRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingDuration);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);

    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) clearTimeout(logoutTimer);
  }, []);

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [logoutHandler, tokenData]);

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

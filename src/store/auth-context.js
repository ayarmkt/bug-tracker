import React from 'react';
import { useState, useCallback, useEffect } from 'react';
//import { useHistory } from 'react-router';
//import { Redirect } from 'react-router-dom';
//import Login from '../components/Login/Login';

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
  //const history = useHistory();

  let initialToken;
  const tokenData = getStoredTokenAndExpirationTime();
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  //if (!token) history.replace('/bug-tracker/login');

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    const remainingDuration = calcRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingDuration);
  };

  const logoutHandler = useCallback(() => {
    //const history = useHistory();
    setToken(null);

    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    //history.replace('/bug-tracker/login');

    if (logoutTimer) clearTimeout(logoutTimer);
  }, []);

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
    // else {
    //   history.replace('/bug-tracker/login');
    // }
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

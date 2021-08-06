import './App.css';
import React, { useContext } from 'react';

import Login from './components/Login/Login';
import AuthContext from './store/auth-context';
// import { useSelector } from 'react-redux';

function App() {
  const authCtx = useContext(AuthContext);
  // isLoggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div>
      <h1>TEST</h1>
      {authCtx.loggedIn && <h1>LoggedIn</h1>}
      {!authCtx.loggedIn && <Login />}
    </div>
  );
}

export default App;

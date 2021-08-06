import './App.css';
import React from 'react';
import Login from './Views/Login/Login';
import { useContext } from 'react';
import AuthContext from './Controllers/store/auth-context';
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

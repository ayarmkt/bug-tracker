import './App.css';
import React from 'react';
import Login from './Views/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <div>
      <h1>TEST</h1>
      {isLoggedIn && <h1>LoggedIn</h1>}
      {!isLoggedIn && <Login />}
    </div>
  );
}

export default App;

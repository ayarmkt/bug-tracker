import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
//import ViewBugs from './pages/ViewBugs';

import Login from './components/Login/Login';
import AuthContext from './store/auth-context';
// import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.loggedIn);

  return (
    <div>
      <Route path='/' exact>
        {!authCtx.loggedIn && (
          <Redirect to='/login'>
            <Login />
          </Redirect>
        )}
        {authCtx.loggedIn && (
          <Redirect to='/dashboard'>
            <Dashboard />
          </Redirect>
        )}
      </Route>
      {!authCtx.loggedIn && (
        <Route path='/login'>
          <Login />
        </Route>
      )}
      {authCtx.loggedIn && (
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      )}
    </div>
  );
}

export default App;

{
  /* <Route path='*'>
          <Login />
        </Route> */
}

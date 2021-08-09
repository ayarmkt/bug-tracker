import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
//import ViewBugs from './pages/ViewBugs';

import Login from './components/Login/Login';
//import Sidebar from './components/sidebar/Sidebar';
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
          <Redirect to='/login' exact>
            <Login />
          </Redirect>
        )}
        {authCtx.loggedIn && (
          <Redirect to='/dashboard/bugs-list' exact>
            <Dashboard />
            {/* <h1>display dashboard</h1> */}
          </Redirect>
        )}
      </Route>
      {!authCtx.loggedIn && (
        <Route path='/login' exact>
          <Login />
        </Route>
      )}
      {authCtx.loggedIn && (
        <Route path='/dashboard/bugs-list' exact>
          <Dashboard />
        </Route>
      )}
    </div>
  );
}

export default App;

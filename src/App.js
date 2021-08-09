import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
//import ViewBugs from './pages/ViewBugs';

import Login from './components/Login/Login';
//import Sidebar from './components/sidebar/Sidebar';
import AuthContext from './store/auth-context';
// import Sidebar from './components/sidebar/Sidebar';
import BugsListPage from './pages/BugsListPage';
//import BugsItemDetail from './components/Bugs/BugsItemDetail';
import BugDetailPage from './pages/BugDetailPage';

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
          <Redirect to='/bugs-list' exact>
            <BugsListPage />
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
        <Route path='/bugs-list' exact>
          <BugsListPage />
        </Route>
      )}
      {authCtx.loggedIn && (
        <Route path='/bugs-list/:bugId'>
          <BugDetailPage />
        </Route>
      )}
    </div>
  );
}

export default App;

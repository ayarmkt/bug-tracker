import classes from './App.module.css';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router';
//import ViewBugs from './pages/ViewBugs';

import Login from './components/Login/Login';
//import Sidebar from './components/sidebar/Sidebar';
import AuthContext from './store/auth-context';
// import Sidebar from './components/sidebar/Sidebar';
//import BugsListPage from './pages/BugsListPage';
import BugsList from './components/Bugs/BugsList';
import BugsItemDetail from './components/Bugs/BugItemDetail';
//import BugDetailPage from './pages/BugDetailPage';
import Sidebar from './components/sidebar/Sidebar';

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
            {/* <BugsListPage /> */}
            <Sidebar className={classes.sidebar} />
            <BugsList className={classes.bugslist} />
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
        <div className={classes.container}>
          <Sidebar className={classes.sidebar} />
          <Switch>
            <Route path='/bugs-list' exact>
              <BugsList className={classes.bugslist} />
            </Route>
            <Route path='/bugs-list/:bugId'>
              <BugsItemDetail className={classes['bug-detail']} />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;

{
  /* <div>
<Route path='/' exact>
  {!authCtx.loggedIn && (
    <Redirect to='/login' exact>
      <Login />
    </Redirect>
  )}
  {authCtx.loggedIn && (
    <Redirect to='/bugs-list' exact>
      <BugsListPage />
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
</div> */
}

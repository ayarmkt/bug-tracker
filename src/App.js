import classes from './App.module.css';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import BugsList from './components/Bugs/BugList/BugsList';
import BugItemDetail from './components/Bugs/BugItemDetail/BugItemDetail';
import Sidebar from './components/sidebar/Sidebar';
import AddNewBug from './components/Bugs/AddNewBug/AddNewBug';
import UpdateBug from './components/Bugs/UpdateBug/UpdateBug';
import './store/firebase';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Route path='/bug-tracker' exact>
        {!authCtx.loggedIn && (
          <Redirect to='/bug-tracker/login' exact>
            <Login />
          </Redirect>
        )}
        {authCtx.loggedIn && (
          <Redirect to='/bug-tracker/bugs-list' exact>
            <Sidebar className={classes.sidebar} />
            <BugsList className={classes.bugslist} />
          </Redirect>
        )}
      </Route>
      {!authCtx.loggedIn && (
        <Route path='/bug-tracker/login' exact>
          <Login />
        </Route>
      )}
      {authCtx.loggedIn && (
        <div className={classes.container}>
          <Sidebar className={classes.sidebar} />
          <Switch>
            <Route path='/bug-tracker/bugs-list' exact>
              <BugsList className={classes.bugslist} />
            </Route>
            <Route path='/bug-tracker/bugs-list/:bugId'>
              <BugItemDetail className={classes['bug-detail']} />
            </Route>
            <Route path='/bug-tracker/submit-bug'>
              <AddNewBug className={classes['submit-bug']} />
            </Route>
            <Route path='/bug-tracker/update-bug/:bugId'>
              <UpdateBug className={classes['update-bug']} />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;

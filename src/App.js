import classes from './App.module.css';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router';
//import { useHistory } from 'react-router';

import AuthContext from './context/auth-context';
import Login from './components/Login/Login';
import BugsList from './components/Bugs/BugList/BugsList';
import BugItemDetail from './components/Bugs/BugItemDetail/BugItemDetail';
import Sidebar from './components/sidebar/Sidebar';
import AddNewBug from './components/Bugs/AddNewBug';
import UpdateBug from './components/Bugs/UpdateBug';

function App() {
  const authCtx = useContext(AuthContext);
  //const history = useHistory(AuthContext);

  //if (!authCtx.token) history.replace('/bug-tracker/login');

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
            <Sidebar className={classes.sidebar} />
            <BugsList className={classes.bugslist} />
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
              <BugItemDetail className={classes['bug-detail']} />
            </Route>
            <Route path='/submit-bug'>
              <AddNewBug className={classes['submit-bug']} />
            </Route>
            <Route path='/update-bug/:bugId'>
              <UpdateBug className={classes['update-bug']} />
            </Route>
          </Switch>
        </div>
      )}
      {!authCtx.token && (
        <Redirect to='/login' exact>
          <Login />
        </Redirect>
      )}
    </div>
  );
}

export default App;

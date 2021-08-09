import React from 'react';
import classes from './Dashboard.module.css';
//import { Link } from 'react-router-dom';
//import { Switch } from 'react-router';
//import { Route } from 'react-router';

import Sidebar from '../components/sidebar/Sidebar';
import BugsList from '../components/Bugs/BugsList';

//import BugsItemDetail from '../components/Bugs/BugsItemDetail';
//import BugItem from '../components/Bugs/BugItem';

const Dashboard = () => {
  return (
    <div className={classes['dashboard-container']}>
      <Sidebar className={classes.sidebar} />
      <BugsList className={classes.bugslist} />
    </div>
  );
};

export default Dashboard;

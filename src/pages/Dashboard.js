import React from 'react';
import classes from './Dashboard.module.css';

import Sidebar from '../components/sidebar/Sidebar';
import BugsList from '../components/Bugs/BugsList';

const Dashboard = () => {
  return (
    <div className={classes['dashboard-container']}>
      <Sidebar className={classes.sidebar} />
      <BugsList className={classes.bugslist} />
    </div>
  );
};

export default Dashboard;

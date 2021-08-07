import React from 'react';
import classes from './Dashboard.module.css';

import Sidebar from '../components/sidebar/Sidebar';
import ViewBugs from './ViewBugs';

const Dashboard = () => {
  return (
    <div className={classes['dashboard-container']}>
      <Sidebar className={classes.sidebar} />
      <ViewBugs className={classes.bugslist} />
    </div>
  );
};

export default Dashboard;

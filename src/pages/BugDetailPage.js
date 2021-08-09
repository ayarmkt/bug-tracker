import React from 'react';
import BugsItemDetail from '../components/Bugs/BugItemDetail';
import classes from './BugDetailPage.module.css';
import Sidebar from '../components/sidebar/Sidebar';

const BugDetailPage = () => {
  return (
    <div className={classes.container}>
      <Sidebar className={classes.sidebar} />
      <BugsItemDetail className={classes['bug-detail']} />
    </div>
  );
};

export default BugDetailPage;

import React from 'react';
//import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import classes from './BugItemDetail.module.css';

const BugsItemDetail = () => {
  const params = useParams();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Bug Detail</h1>
      {/* <p>{params.name}</p> */}
      <p>{params.bugId}</p>

      {/* <Link to='/dashboard/bugs-list'>Return to list</Link> */}
    </div>
  );
};

export default BugsItemDetail;

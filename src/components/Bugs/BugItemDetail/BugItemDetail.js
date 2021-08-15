import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './BugItemDetail.module.css';
import Button from '../../../UI/Button';

const BugItemDetail = () => {
  const params = useParams();
  console.log(params);

  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);

  const selectedBug = bugs.find((bug) => bug.id === params.bugId);
  console.log(selectedBug);

  let bugPriority;
  switch (selectedBug.priority) {
    case '1':
      bugPriority = 'High';
      break;
    case '2':
      bugPriority = 'Mid';
      break;
    case '3':
      bugPriority = 'Low';
      break;
    default:
      bugPriority = 'High';
  }

  return (
    <div className={classes.container}>
      <h1>Bug Detail</h1>

      <div className={classes['bug-detail']}>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Title</p>
          <p className={classes.content}>{selectedBug.title}</p>
        </div>
        <div className={classes['detail-content-long-text']}>
          <p className={classes.label}>Details</p>
          <p className={classes.content}>{selectedBug.details}</p>
        </div>
        <div className={classes['detail-content-long-text']}>
          <p className={classes.label}>Steps</p>
          <p className={classes.content}>{selectedBug.steps}</p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Version</p>
          <p className={classes.content}>{selectedBug.version}</p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Priority</p>
          <p className={classes.content}>{bugPriority}</p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Assigned</p>
          <p className={classes.content}>{selectedBug.assigned}</p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Creator</p>
          <p className={classes.content}>{selectedBug.creator}</p>
        </div>
        <Button
          type='button'
          disabled={false}
          className={classes['delete-btn']}
          //onClick={submitNewBugHandler}
          text='Delete bug'
        />
        <Link to={`/update-bug/${selectedBug.id}`}>
          <Button
            type='button'
            disabled={false}
            className={classes['update-btn']}
            //onClick={submitNewBugHandler}
            text='Update bug'
          />
          {/* <button>Edit</button> */}
        </Link>

        <Link to='/bugs-list' className={classes['back-to-list']}>
          <p>↶Back to List</p>
        </Link>
      </div>
    </div>
  );
};

export default BugItemDetail;

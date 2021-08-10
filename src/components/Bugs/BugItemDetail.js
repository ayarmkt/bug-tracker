import React from 'react';
//import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import classes from './BugItemDetail.module.css';
import { Link } from 'react-router-dom';

const BugItemDetail = () => {
  const params = useParams();
  console.log(params);

  // const bug =
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  return (
    <div className={classes.container}>
      <h1>Bug Detail</h1>

      <div className={classes['bug-detail']}>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Title</p>
          <p className={classes.content}></p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Details</p>
          <p className={classes.content}></p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Steps</p>
          <p className={classes.content}></p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Version</p>
          <p className={classes.content}></p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Priority</p>
          <p className={classes.content}></p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Assigned</p>
          <p className={classes.content}></p>
        </div>
        <div className={classes['detail-content']}>
          <p className={classes.label}>Creator</p>
          <p className={classes.content}></p>
        </div>
      </div>

      {/* <p>{params.name}</p> */}
      <p>{params.bugId}</p>
      {/* <ul>
        <li>
          <p>Name</p>
          <p>{props.bug.name}</p>
        </li>
        <li>
          <p>Version</p>
          <p>{props.bug.version}</p>
        </li>
        <li>
          <p>Priority</p>
          <p>{props.bug.priority}</p>
        </li>
        <li>
          <p>Assigned</p>
          <p>{props.bug.assigned}</p>
        </li>
        <li>
          <p>Creator</p>
          <p>{props.bug.creator}</p>
        </li>
      </ul> */}

      {/* <Link to='/dashboard/bugs-list'>Return to list</Link> */}
      <Link to='/bugs-list'>Back to List</Link>
    </div>
  );
};

export default BugItemDetail;

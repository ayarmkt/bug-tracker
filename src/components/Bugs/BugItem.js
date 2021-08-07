import classes from './BugItem.module.css';
import React from 'react';

const BugItem = (props) => {
  return (
    <li className={classes.item} key={props.bug._id}>
      <p>{props.bug.name}</p>
      <p>{props.bug.priority}</p>
      <p>{props.bug.version}</p>
    </li>
  );
};

export default BugItem;

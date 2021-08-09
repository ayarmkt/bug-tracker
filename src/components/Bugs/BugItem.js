import classes from './BugItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const BugItem = (props) => {
  return (
    <Link to={`/dashboard/bugs-list/${props.id}`}>
      <li className={classes.item} key={props.bug._id}>
        <p>{props.bug.name}</p>
        <p>{props.bug.version}</p>
        <p>{props.bug.priority}</p>
        <p>{props.bug.assigned}</p>
        <p>{props.bug.creator}</p>
      </li>
    </Link>
    //   <Route path='/dashboard/bugs-list/:bugId'>
    //   <Sidebar className={classes.sidebar} />
    //   <BugsItemDetail />
    // </Route>
  );
};

export default BugItem;

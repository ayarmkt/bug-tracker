import classes from './BugItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const BugItem = (props) => {
  return (
    <Link className={classes.link} to={`/bugs-list/${props.id}`}>
      <li className={classes.item} key={props.bug.id} bug={props.bug}>
        <p>{props.bug.title}</p>
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

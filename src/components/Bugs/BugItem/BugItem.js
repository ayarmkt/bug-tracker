import classes from './BugItem.module.css';
import React from 'react';
//import { useParams } from 'react-router';
//import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';
import { BsTrashFill } from 'react-icons/bs';

const BugItem = (props) => {
  // const params = useParams();
  // console.log(params);
  // const { bugs } = useSelector((state) => state.bugs);
  // console.log(bugs);
  // const selectedBug = bugs.find((bug) => bug.id === params.bugId);

  const editBugHandler = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  };

  return (
    <div className={classes['bug-item']}>
      <Link className={classes.link} to={`/bugs-list/${props.id}`}>
        <li
          className={classes['bug-detail']}
          key={props.bug.id}
          bug={props.bug}
        >
          <p>{props.bug.title}</p>
          <p>{props.bug.version}</p>
          <p>{props.bug.priority}</p>
          <p>{props.bug.assigned}</p>
          <p>{props.bug.creator}</p>
        </li>
      </Link>
      <div className={classes.actions}>
        <Link to={`/update-bug/${props.bug.id}`}>
          <BiEdit
            className={classes.icon}
            size='25px'
            color='green'
            onClick={editBugHandler}
          />
        </Link>
        <BsTrashFill className={classes.icon} size='25px' color='red' />
      </div>
    </div>
  );
};

export default BugItem;

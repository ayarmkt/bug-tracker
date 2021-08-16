import classes from './BugItem.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal } from '../../../store/ui-slice';
import { storeSelectedBug } from '../../../store/bug-slice';

import { BiEdit } from 'react-icons/bi';
import { BsTrashFill } from 'react-icons/bs';

const adjustLength = (word) => {
  if (word.length > 17) {
    const adjustedWord = word.slice(0, 15) + '...';
    return adjustedWord;
  } else {
    return word;
  }
};

const BugItem = (props) => {
  const dispatch = useDispatch();

  const { bugs } = useSelector((state) => state.bugs);
  const selectedBug = bugs.find((bug) => bug.id === props.bug.id);

  const openModalHandler = () => {
    dispatch(storeSelectedBug(selectedBug));
    dispatch(openModal());
  };

  let bugPriority;
  switch (props.bug.priority) {
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
    <div className={classes['bug-item']}>
      <Link className={classes.link} to={`/bug-tracker/bugs-list/${props.id}`}>
        <li
          className={classes['bug-detail']}
          key={props.bug.id}
          bug={props.bug}
        >
          <p>{adjustLength(props.bug.title)}</p>
          <p>{props.bug.version}</p>
          <p>{bugPriority}</p>
          <p>{props.bug.assigned}</p>
          <p>{props.bug.creator}</p>
        </li>
      </Link>
      <div className={classes.actions}>
        <Link to={`/bug-tracker/update-bug/${props.id}`}>
          <BiEdit className={classes.icon} size='25px' color='green' />
        </Link>
        <BsTrashFill
          className={classes.icon}
          size='25px'
          color='red'
          onClick={openModalHandler}
        />
      </div>
    </div>
  );
};

export default BugItem;

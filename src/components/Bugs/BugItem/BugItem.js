import classes from './BugItem.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../store/ui-slice';
//import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { storeSelectedBug } from '../../../store/bug-slice';

import { Link } from 'react-router-dom';
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

  //const params = useParams();
  //console.log(params);

  const { bugs } = useSelector((state) => state.bugs);

  const selectedBug = bugs.find((bug) => bug.id === props.bug.id);

  console.log(bugs);
  console.log(selectedBug);

  // const editBugHandler = (e) => {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  // };

  const openModalHandler = () => {
    console.log(bugs);
    console.log(selectedBug);
    console.log(selectedBug.id);
    console.log(props.bug.id);
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
      <Link className={classes.link} to={`/bugs-list/${props.id}`}>
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
        <Link to={`/update-bug/${props.id}`}>
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

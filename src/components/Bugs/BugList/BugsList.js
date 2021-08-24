import classes from './BugsList.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
//import { useDispatch } from 'react-redux';

import BugItem from '../BugItem/BugItem';
import ModalOverlay from '../../../UI/ModalOverlay';
import { getBugsFromServer } from '../../../store/firebase-api';

const BugsList = () => {
  //const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state.bugs);
  const { modalOpen } = useSelector((state) => state.ui);

  //eventually move to bug-slice
  // let bugs = [...bugs];
  // if (bugs.length > 1) {
  //   bugs.sort((a, b) => Number(a.priority) - Number(b.priority));
  // }

  const getBugs = async () => {
    if (bugs) {
      await getBugsFromServer();
      await console.log(bugs);
      //dispatch(getBugs(bugsList));
    }
  };

  useEffect(() => {
    //fetch bugs
    getBugs();
  }, [bugs]);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h1>All Bugs</h1>
        <ul className={classes['list-container']}>
          <li className={classes.labels}>
            <p key='title'>Title</p>
            <p key='version'>Version</p>
            <p key='priority'>Priority</p>
            <p key='assigned'>Assigned</p>
            <p key='creator'>Creator</p>
            <div className={classes.actions}>
              <p>Edit</p>
              <p>Delete</p>
            </div>
          </li>
          {bugs.length >= 1 &&
            bugs.map((bug) => (
              <BugItem
                className={classes.items}
                key={bug.id}
                id={bug.id}
                bug={bug}
              />
            ))}
          {bugs.length === 0 && <p className={classes.error}>No bugs found.</p>}
        </ul>
      </div>
      {modalOpen && <ModalOverlay />}
    </React.Fragment>
  );
};

export default BugsList;

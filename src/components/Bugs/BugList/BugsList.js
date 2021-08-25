import classes from './BugsList.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import BugItem from '../BugItem/BugItem';
import ModalOverlay from '../../../UI/ModalOverlay';
import { getBugsFromServer } from '../../../store/bug-actions';
import { getBugs } from '../../../store/bug-slice';

const BugsList = () => {
  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  // //eventually move to bug-slice
  let sortedArray = [...bugs];
  if (sortedArray.length > 1) {
    sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
  }

  const getData = useCallback(async () => {
    //await console.log('getData running');
    const storedBugs = await getBugsFromServer();
    await console.log(storedBugs);
    await dispatch(getBugs(storedBugs));
    //await sortArray(bugs);
    //await console.log(sortedArray);
    //await console.log(bugs);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

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
          {sortedArray &&
            sortedArray.length >= 1 &&
            sortedArray.map((bug) => (
              <BugItem
                className={classes.items}
                key={bug.id}
                id={bug.id}
                bug={bug}
              />
            ))}
          {(!sortedArray || sortedArray.length === 0) && (
            <p className={classes.error}>No bugs found.</p>
          )}
        </ul>
      </div>
      {modalOpen && <ModalOverlay />}
    </React.Fragment>
  );
};

export default BugsList;

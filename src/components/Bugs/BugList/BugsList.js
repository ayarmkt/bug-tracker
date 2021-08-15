import classes from './BugsList.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

import BugItem from '../BugItem/BugItem';
import ModalOverlay from '../../../UI/ModalOverlay';


const BugsList = () => {


  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);
  const { modalOpen } = useSelector((state) => state.ui);

  let sortedArray = [...bugs];
  if (sortedArray.length > 1) {
    // sortedData = dispatch(getBugs(DUMMY_DATA));
    sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
  }


  return (
    <React.Fragment>
      <div className={classes.container}>
        {/* <p>VIEWBUGS</p> */}
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
          {sortedArray.length >= 1 &&
            sortedArray.map((bug) => (
              <BugItem
                className={classes.items}
                key={bug.id}
                id={bug.id}
                bug={bug}
              />
            ))}
          {sortedArray.length === 0 && (
            <p className={classes.error}>No bugs found.</p>
          )}
        </ul>
      </div>
      {modalOpen && <ModalOverlay />}
    </React.Fragment>
  );
};

export default BugsList;


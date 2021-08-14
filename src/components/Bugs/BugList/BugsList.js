// import { useEffect } from 'react';
import React from 'react';
import classes from './BugsList.module.css';
import { useSelector } from 'react-redux';
//import { useEffect } from 'react';
//import { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
//import { getBugs } from '../../store/bug-slice';
import BugItem from '../BugItem/BugItem';
import ModalOverlay from '../../../UI/ModalOverlay';
//import { getBugData } from '../../../store/bug-slice';

const BugsList = () => {
  //const dispatch = useDispatch();
  //let sortedData;

  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);
  const { modalOpen } = useSelector((state) => state.ui);

  // useEffect(() => {
  //   const data = getBugData();
  //   console.log(data);
  //   //console.log(sortedArray);
  // }, [sortedArray]);

  let sortedArray = [...bugs];
  if (sortedArray.length > 1) {
    // sortedData = dispatch(getBugs(DUMMY_DATA));
    sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
  }

  //console.log(sortedArray);

  // useEffect(() => {
  //   dispatch(getBugs());
  // }, [dispatch]);

  // if (bugs.length > 1) {
  //   // sortedData = dispatch(getBugs(DUMMY_DATA));
  //   sortedData = bugs.sort((a, b) => a.priority - b.priority);
  //   // return sortedData;
  //   console.log(sortedData);
  // } else {
  //   sortedData = bugs;
  // }

  //console.log(sortedData);

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

// const DUMMY_DATA = [
//   {
//     id: 23456789,
//     title: 'Crashed on Load',
//     details: 'Crashed after 3 seconds',
//     steps: 'Open application and it will crash',
//     version: 'V2.0',
//     priority: 1,
//     assigned: 'Aya',
//     creator: 'Joe',
//     time: '23:30',
//   },
//   {
//     id: 23456786,
//     title: 'cannot enter again',
//     details: 'Crashed after 3 seconds',
//     steps: 'Open application and it will crash',
//     version: 'V2.0',
//     priority: 5,
//     assigned: 'Tom',
//     creator: 'Joe',
//     time: '23:38',
//   },
//   {
//     id: 23456787,
//     title: 'cannot enter ',
//     details: 'Crashed after 3 seconds',
//     steps: 'Open application and it will crash',
//     version: 'V2.0',
//     priority: 3,
//     assigned: 'Aya',
//     creator: 'Joe',
//     time: '23:38',
//   },
// ];

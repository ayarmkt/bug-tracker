// import { useEffect } from 'react';
import React from 'react';
import classes from './BugsList.module.css';
import { useSelector } from 'react-redux';
//import { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
//import { getBugs } from '../../store/bug-slice';
import BugItem from './BugItem';

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

const BugsList = () => {
  //const dispatch = useDispatch();
  //let sortedData;

  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);

  let sortedArray = [...bugs];
  console.log(sortedArray);
  if (sortedArray.length > 1) {
    // sortedData = dispatch(getBugs(DUMMY_DATA));
    sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
  }
  console.log(sortedArray);

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
    <div className={classes.container}>
      {/* <p>VIEWBUGS</p> */}
      <h1>All Bugs</h1>
      <ul className={classes['list-container']}>
        <li className={classes.labels}>
          <p>Title</p>
          <p>Version</p>
          <p>Priority</p>
          <p>Assigned</p>
          <p>Creator</p>
        </li>
        {sortedArray.length >= 1 &&
          sortedArray.map((bug) => (
            <BugItem
              className={classes.items}
              bug={bug}
              key={bug.id}
              id={bug.id}
            />
          ))}
        {sortedArray.length === 0 && (
          <p className={classes.error}>No bugs found.</p>
        )}
      </ul>
    </div>
  );
};

export default BugsList;

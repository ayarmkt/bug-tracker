// import { useEffect } from 'react';
import React from 'react';
import classes from './BugsList.module.css';
import { useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
//import { getBugs } from '../../store/bug-slice';
import BugItem from './BugItem';

const DUMMY_DATA = [
  {
    _id: 23456789,
    name: 'Crashed on Load',
    details: 'Crashed after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    priority: 1,
    assigned: 'Aya',
    creator: 'Joe',
    time: '23:30',
  },
  {
    _id: 23456786,
    name: 'cannot enter again',
    details: 'Crashed after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    priority: 5,
    assigned: 'Tom',
    creator: 'Joe',
    time: '23:38',
  },
  {
    _id: 23456787,
    name: 'cannot enter ',
    details: 'Crashed after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    priority: 3,
    assigned: 'Aya',
    creator: 'Joe',
    time: '23:38',
  },
];

const BugsList = () => {
  //const dispatch = useDispatch();

  const bugs = useSelector((state) => state.bugs);

  let sortedData;

  if (bugs.length < 1) {
    // sortedData = dispatch(getBugs(DUMMY_DATA));
    sortedData = DUMMY_DATA.sort((a, b) => a.priority - b.priority);
    // return sortedData;
    console.log(sortedData);
  }

  // useEffect(() => {
  //   dispatch(getBugs());
  // }, []);

  return (
    <div className={classes.container}>
      {/* <p>VIEWBUGS</p> */}
      <h1>Bugs</h1>
      <ul className={classes['list-container']}>
        <li className={classes.labels}>
          <p>Name</p>
          <p>Version</p>
          <p>Priority</p>
          <p>Assigned</p>
          <p>Creator</p>
        </li>
        {sortedData.map((bug) => (
          <BugItem
            className={classes.items}
            bug={bug}
            key={bug._id}
            id={bug._id}
          />
        ))}
      </ul>
    </div>
  );
};

export default BugsList;

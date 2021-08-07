// import { useEffect } from 'react';
import React from 'react';
import classes from './ViewBugs.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getBugs } from '../store/bug-slice';
import BugItem from '../components/Bugs/BugItem';

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
    _id: 23456788,
    name: 'cannot enter',
    details: 'Crashed after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    priority: 3,
    assigned: 'Aya',
    creator: 'Joe',
    time: '23:38',
  },
];

const ViewBugs = () => {
  const dispatch = useDispatch();

  const bugs = useSelector((state) => state.bugs);

  if (bugs.length < 1) {
    dispatch(getBugs());
  }

  // useEffect(() => {
  //   dispatch(getBugs());
  // }, []);

  return (
    <div className={classes.container}>
      {/* <p>VIEWBUGS</p> */}
      <ul>
        {DUMMY_DATA.map((bug) => (
          <BugItem bug={bug} key={bug._id} />
        ))}
      </ul>
    </div>
  );
};

export default ViewBugs;

import classes from './AddNewBug.module.css';
import React from 'react';
import { useRef } from 'react';
//import { useDispatch } from 'react-redux';
//import { createBugs } from '../../store/bug-slice';
import { useSelector } from 'react-redux';

const AddNewBug = () => {
  const enteredTitle = useRef();
  const enteredDetails = useRef();
  const enteredSteps = useRef();
  const enteredVersion = useRef();
  const enteredPriority = useRef();
  const enteredAssigned = useRef();
  const enteredCreator = useRef();

  //   const newBug = {
  //     enteredTitle,
  //     enteredDetails,
  //     enteredSteps,
  //     enteredVersion,
  //     enteredPriority,
  //     enteredAssigned,
  //     enteredCreator,
  //   };

  //const dispatch = useDispatch();

  const addNewBugHandler = () => {
    console.log('added');
    // dispatch(createBugs(newBug));
    // console.log(newBug);
  };

  const bugs = useSelector((state) => state.bugs);
  console.log(bugs);

  return (
    <div className={classes.container}>
      <h1>Create New Bug</h1>
      <form className={classes['bug-form']} onSubmit={addNewBugHandler}>
        <div className={classes['add-bug-form']}>
          <div className={classes['add-bug-input']}>
            <label>Title</label>
            <input
              type='text'
              placeholder='enter title'
              ref={enteredTitle}
            ></input>
          </div>
          <div className={classes['add-bug-input']}>
            <label>Details</label>
            <input
              type='text'
              placeholder='enter details'
              ref={enteredDetails}
            ></input>
          </div>
          <div className={classes['add-bug-input']}>
            <label>Steps</label>
            <input
              type='text'
              placeholder='enter steps'
              ref={enteredSteps}
            ></input>
          </div>
          <div className={classes['add-bug-input']}>
            <label>Version</label>
            <input
              type='text'
              placeholder='version 2'
              ref={enteredVersion}
            ></input>
          </div>
          <div className={classes['add-bug-input']}>
            <label>Priority</label>
            <input type='number' placeholder='1' ref={enteredPriority}></input>
          </div>
          <div className={classes['add-bug-input']}>
            <label>Assigned</label>
            <input
              type='text'
              placeholder='assigned person here'
              ref={enteredAssigned}
            ></input>
          </div>
          <div className={classes['add-bug-input']}>
            <label>Creator</label>
            <input
              type='text'
              placeholder='creator name'
              ref={enteredCreator}
            ></input>
          </div>
        </div>
        <button type='submit'>Add new bug</button>
      </form>
    </div>
  );
};

export default AddNewBug;

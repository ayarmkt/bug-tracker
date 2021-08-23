import classes from './AddNewBug.module.css';
import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useHistory } from 'react-router';

//import { addNewBugs } from '../../../store/bug-slice';
import useBugInput from '../../../hooks/useBugInput';
import Button from '../../../UI/Button';
import { addBugsToServer } from '../../../store/firebase-api';

const AddNewBug = () => {
  //const dispatch = useDispatch();
  //const history = useHistory();

  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    resetValueHandler: resetTitle,
  } = useBugInput('');

  const {
    enteredValue: enteredDetails,
    valueChangeHandler: detailsChangeHandler,
    resetValueHandler: resetDetails,
  } = useBugInput('');

  const {
    enteredValue: enteredSteps,
    valueChangeHandler: stepsChangeHandler,
    resetValueHandler: resetSteps,
  } = useBugInput('');

  const {
    enteredValue: enteredVersion,
    valueChangeHandler: versionChangeHandler,
    resetValueHandler: resetVersion,
  } = useBugInput('');

  const {
    enteredValue: enteredPriority,
    valueChangeHandler: priorityChangeHandler,
    resetValueHandler: resetPriority,
  } = useBugInput('1');

  const {
    enteredValue: enteredAssigned,
    valueChangeHandler: assignedChangeHandler,
    resetValueHandler: resetAssigned,
  } = useBugInput('');

  const {
    enteredValue: enteredCreator,
    valueChangeHandler: creatorChangeHandler,
    resetValueHandler: resetCreator,
  } = useBugInput('');

  const postNewBugs = () => {
    const newBug = {
      //id: enteredTitle,
      title: enteredTitle,
      details: enteredDetails,
      steps: enteredSteps,
      version: enteredVersion,
      priority: enteredPriority,
      assigned: enteredAssigned,
      creator: enteredCreator,
      //time: enteredTime,
    };
    console.log(newBug);

    addBugsToServer(newBug);
    resetTitle();
    resetDetails();
    resetSteps();
    resetVersion();
    resetPriority();
    resetAssigned();
    resetCreator();
  };

  const submitNewBugHandler = (e) => {
    e.preventDefault();

    //temporarily unabing time
    //const enteredTime = new Date().getTime();
    //const enteredId = enteredTitle;
    //enteredTime +

    // const newBug = {
    //   //id: enteredTitle,
    //   title: enteredTitle,
    //   details: enteredDetails,
    //   steps: enteredSteps,
    //   version: enteredVersion,
    //   priority: enteredPriority,
    //   assigned: enteredAssigned,
    //   creator: enteredCreator,
    //   //time: enteredTime,
    // };
    // console.log(newBug);

    //dispatch(addNewBugs(newBug));
    //addBugsToServer(newBug);
    postNewBugs();
    // history.push('/bug-tracker/bugs-list');
  };

  return (
    <div className={classes.container}>
      <h1>Add New Bug</h1>
      <form className={classes['bug-form']} onSubmit={submitNewBugHandler}>
        <div className={classes['add-bug-form']}>
          <div className={classes['add-bug-input']}>
            <label>Title</label>
            <input
              type='text'
              placeholder='enter title'
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className={classes['add-bug-textarea']}>
            <label>Details</label>
            <textarea
              type='text'
              placeholder='enter details'
              onChange={detailsChangeHandler}
              value={enteredDetails}
            />
          </div>
          <div className={classes['add-bug-textarea']}>
            <label>Steps</label>
            <textarea
              type='text'
              placeholder='enter steps'
              onChange={stepsChangeHandler}
              value={enteredSteps}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Version</label>
            <input
              type='text'
              placeholder='enter version'
              onChange={versionChangeHandler}
              value={enteredVersion}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Priority</label>
            <select onChange={priorityChangeHandler} value={enteredPriority}>
              {/* defaultValue={'1'} */}
              <option value='1'>High</option>
              <option value='2'>Mid</option>
              <option value='3'>Low</option>
            </select>
          </div>
          <div className={classes['add-bug-input']}>
            <label>Assigned</label>
            <input
              type='text'
              placeholder='enter assigned person'
              onChange={assignedChangeHandler}
              value={enteredAssigned}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Creator</label>
            <input
              type='text'
              placeholder='enter creator'
              onChange={creatorChangeHandler}
              value={enteredCreator}
            />
          </div>
        </div>
        <Button
          type='submit'
          disabled={false}
          className={classes['add-bug-btn']}
          onClick={submitNewBugHandler}
          text='Add new bug'
        />
      </form>
    </div>
  );
};

export default AddNewBug;

import classes from './AddNewBug.module.css';
import React from 'react';
//import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBugs } from '../../../store/bug-slice';
import { useSelector } from 'react-redux';
import useBugInput from '../../../hooks/useBugInput';

const AddNewBug = () => {
  const dispatch = useDispatch();
  // const [isUpdatingBug, setIsUpdatingBug] = useState(false);
  //const { isUpdatingBug } = useSelector((state) => state.bugs);
  //const editingId = useSelector((state) => state.bugs.bugs.id);
  //console.log(editingId);

  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    resetValue: resetTitle,
  } = useBugInput('');

  const {
    enteredValue: enteredDetails,
    valueChangeHandler: detailsChangeHandler,
    resetValue: resetDetails,
  } = useBugInput('');

  const {
    enteredValue: enteredSteps,
    valueChangeHandler: stepsChangeHandler,
    resetValue: resetSteps,
  } = useBugInput('');

  const {
    enteredValue: enteredVersion,
    valueChangeHandler: versionChangeHandler,
    resetValue: resetVersion,
  } = useBugInput('');

  const {
    enteredValue: enteredPriority,
    valueChangeHandler: priorityChangeHandler,
    resetValue: resetPriority,
  } = useBugInput('');

  //const [enteredPriority, setEnteredPriority] = useState();

  const {
    enteredValue: enteredAssigned,
    valueChangeHandler: assignedChangeHandler,
    resetValue: resetAssigned,
  } = useBugInput('');

  const {
    enteredValue: enteredCreator,
    valueChangeHandler: creatorChangeHandler,
    resetValue: resetCreator,
  } = useBugInput('');

  const submitNewBugHandler = (e) => {
    e.preventDefault();
    console.log('added');

    const enteredTime = new Date().getTime();
    const enteredId = enteredTime + enteredTitle;
    // if (isUpdatingBug) {
    //   enteredId = editingId;
    // } else {
    // }

    const newBug = {
      title: enteredTitle,
      details: enteredDetails,
      steps: enteredSteps,
      version: enteredVersion,
      priority: enteredPriority,
      assigned: enteredAssigned,
      creator: enteredCreator,
      time: enteredTime,
      id: enteredId,
    };
    console.log(newBug);

    dispatch(addNewBugs(newBug));

    // if (isUpdatingBug) {
    //   dispatch(updateBugs(newBug));
    // } else {

    // }

    resetTitle();
    resetDetails();
    resetSteps();
    resetVersion();
    resetPriority();
    resetAssigned();
    resetCreator();
  };

  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);

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
          <div className={classes['add-bug-input']}>
            <label>Details</label>
            <input
              type='text'
              placeholder='enter details'
              onChange={detailsChangeHandler}
              value={enteredDetails}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Steps</label>
            <input
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
              placeholder='version 2'
              onChange={versionChangeHandler}
              value={enteredVersion}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Priority</label>
            <input
              type='number'
              placeholder='1'
              onChange={priorityChangeHandler}
              value={enteredPriority}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Assigned</label>
            <input
              type='text'
              placeholder='assigned person here'
              onChange={assignedChangeHandler}
              value={enteredAssigned}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Creator</label>
            <input
              type='text'
              placeholder='creator name'
              onChange={creatorChangeHandler}
              value={enteredCreator}
            />
          </div>
        </div>
        <button type='submit'>Add new bug</button>
      </form>
    </div>
  );
};

export default AddNewBug;

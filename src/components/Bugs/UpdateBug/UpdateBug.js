import classes from './UpdateBug.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { updateBugs } from '../../../store/bug-slice';
import useBugInput from '../../../hooks/useBugInput';
import { useHistory } from 'react-router';
//import { storeBugData } from '../../../store/bug-slice';

const EditBug = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const history = useHistory();

  const { bugs } = useSelector((state) => state.bugs);
  //console.log(bugs);

  const selectedBug = bugs.find((bug) => bug.id === params.bugId);
  //console.log(selectedBug);
  //console.log(selectedBug.title);

  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    resetValue: resetTitle,
  } = useBugInput(selectedBug.title);

  const {
    enteredValue: enteredDetails,
    valueChangeHandler: detailsChangeHandler,
    resetValue: resetDetails,
  } = useBugInput(selectedBug.details);

  const {
    enteredValue: enteredSteps,
    valueChangeHandler: stepsChangeHandler,
    resetValue: resetSteps,
  } = useBugInput(selectedBug.steps);

  const {
    enteredValue: enteredVersion,
    valueChangeHandler: versionChangeHandler,
    resetValue: resetVersion,
  } = useBugInput(selectedBug.version);

  const {
    enteredValue: enteredPriority,
    valueChangeHandler: priorityChangeHandler,
    resetValue: resetPriority,
  } = useBugInput(selectedBug.priority);

  const {
    enteredValue: enteredAssigned,
    valueChangeHandler: assignedChangeHandler,
    resetValue: resetAssigned,
  } = useBugInput(selectedBug.assigned);

  const {
    enteredValue: enteredCreator,
    valueChangeHandler: creatorChangeHandler,
    resetValue: resetCreator,
  } = useBugInput(selectedBug.creator);

  console.log(enteredTitle);

  const submitUpdatedBugHandler = (e) => {
    e.preventDefault();
    console.log('updated');

    const enteredTime = new Date().getTime();
    const enteredId = selectedBug.id;
    console.log(enteredId);

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

    dispatch(updateBugs(newBug));
    //storeBugData(bugs);
    history.push('/bugs-list');

    resetTitle();
    resetDetails();
    resetSteps();
    resetVersion();
    resetPriority();
    resetAssigned();
    resetCreator();
  };

  return (
    <div className={classes.container}>
      <h1>Update Bug</h1>
      <form className={classes['bug-form']} onSubmit={submitUpdatedBugHandler}>
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
        <button type='submit'>Save updated bug</button>
      </form>
    </div>
  );
};

export default EditBug;

// const [enteredTitle, setEnteredTitle] = useState(bugs.title);
// const [enteredDetails, setEnteredDetails] = useState(bugs.details);
// const [enteredSteps, setEnteredSteps] = useState(bugs.steps);
// const [enteredVersion, setEnteredVersion] = useState(bugs.version);
// const [enteredPriority, setEnteredPriority] = useState(bugs.priority);
// const [enteredAssigned, setEnteredAssigned] = useState(bugs.assigned);
// const [enteredCreator, setEnteredCreator] = useState(bugs.creator);

// const titleChangeHandler = (e) => {
//   setEnteredValue(e.target.value);
// };

// const detailsChangeHandler = (e) => {
//   setEnteredValue(e.target.value);
// };

// const stepsChangeHandler = (e) => {
//   setEnteredValue(e.target.value);
// };

// const versionChangeHandler = (e) => {
//   setEnteredValue(e.target.value);
// };

// const priorityChangeHandler = (e) => {
//   setEnteredValue(e.target.value);
// };

// const assignedChangeHandler = (e) => {
//   setEnteredValue(e.target.value);
// };

// const creatorChangeHandler = (e) => {
//   setEnteredValue(e.target.value);
// };

// setEnteredTitle('');
// setEnteredDetails('');
// setEnteredSteps('');
// setEnteredVersion('');
// setEnteredTitle('');
// setEnteredTitle('');
// setEnteredTitle('');

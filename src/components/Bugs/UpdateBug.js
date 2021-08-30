//import classes from './UpdateBug.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { getBugs, updateBugs } from '../../store/bug-slice';
import useForm from '../../hooks/useForm';
import BugForm from './BugForm/BugForm';
import {
  sendUpdatedBugToServer,
  getBugsFromServer,
} from '../../store/bug-actions';


const EditBug = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);
  const selectedBug = bugs.find((bug) => bug.id === params.bugId);
  const selectedBugKey = selectedBug.key;

  const initialFormState = {
    title: selectedBug.title,
    details: selectedBug.details,
    steps: selectedBug.steps,
    version: selectedBug.version,
    priority: selectedBug.priority,
    assigned: selectedBug.assigned,
    creator: selectedBug.creator,
  };

  const resetFormState = {
    title: '',
    details: '',
    steps: '',
    version: '',
    priority: '',
    assigned: '',
    creator: '',
  };

  const { formData, handleInputChange, resetForm } = useForm(
    initialFormState,
    resetFormState
  );

  const submitUpdatedBugs = async () => {
    const enteredId = selectedBug.id;
    const enteredTime = selectedBug.time;

    const newBug = {
      ...formData,
      time: enteredTime,
      id: enteredId,
      key: selectedBugKey,
    };

    dispatch(updateBugs(newBug));
    await sendUpdatedBugToServer(newBug, selectedBugKey);
    await resetForm();
    const storedBugs = await getBugsFromServer();
    await dispatch(getBugs(storedBugs));
    await history.push('/bug-tracker/bugs-list');
  };

  const submitUpdatedBugHandler = (e) => {
    e.preventDefault();
    submitUpdatedBugs();
  };

  return (
    <BugForm
      title='Update Bug'
      onSubmit={submitUpdatedBugHandler}
      onChange={handleInputChange}
      formData={formData}
      onClick={submitUpdatedBugHandler}
      btnText='Save updated bug'
    />
  );
};

export default EditBug;

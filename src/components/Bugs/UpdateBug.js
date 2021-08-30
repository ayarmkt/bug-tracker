import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';

import { updateBugs } from '../../store/bug-slice';
import useForm from '../../hooks/useForm';
import BugForm from './BugForm/BugForm';

const EditBug = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const { bugs } = useSelector((state) => state.bugs);
  const selectedBug = bugs.find((bug) => bug.id === params.bugId);

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

  const submitUpdatedBugHandler = (e) => {
    e.preventDefault();

    const enteredTime = new Date().getTime();
    const enteredId = selectedBug.id;

    const newBug = {
      ...formData,
      time: enteredTime,
      id: enteredId,
    };

    dispatch(updateBugs(newBug));
    resetForm();
    history.push('/bug-tracker/bugs-list');
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

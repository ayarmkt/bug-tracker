import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { addNewBugs } from '../../store/bug-slice';
import useForm from '../../hooks/useForm';
import BugForm from './BugForm/BugForm';

const AddNewBug = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialFormState = {
    title: '',
    details: '',
    steps: '',
    version: '',
    priority: '',
    assigned: '',
    creator: '',
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

  const submitNewBugHandler = (e) => {
    e.preventDefault();

    const enteredTime = new Date().getTime();
    const enteredId = enteredTime + formData.title;

    const newBug = {
      ...formData,
      time: enteredTime,
      id: enteredId,
    };

    dispatch(addNewBugs(newBug));
    resetForm();
    history.push('/bug-tracker/bugs-list');
  };

  return (
    <BugForm
      title='Add New Bug'
      onSubmit={submitNewBugHandler}
      onChange={handleInputChange}
      formData={formData}
      onClick={submitNewBugHandler}
      btnText='Add new bug'
    />
  );
};

export default AddNewBug;

import React from 'react';
import { useHistory } from 'react-router';

import useForm from '../../hooks/useForm'
import BugForm from './BugForm/BugForm';
import {
  sendNewBugsToServer,
  getBugsFromServer,
} from '../../store/bug-actions';

const AddNewBug = () => {
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


  const submitNewBug = async () => {

    const newBug = {
      ...formData
    };

    await sendNewBugsToServer(newBug);
    await getBugsFromServer();
    await resetForm();
    await history.push('/bug-tracker/bugs-list');
  };

  const submitNewBugHandler = (e) => {
    e.preventDefault();
    submitNewBug();
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

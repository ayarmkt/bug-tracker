import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import useForm from '../../hooks/useForm';
import BugForm from './BugForm/BugForm';
import {
  sendNewBugsToServer,
  getBugsFromServer,
} from '../../store/bug-actions';

const AddNewBug = () => {
  const history = useHistory();
  const dispatch = useDispatch();

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
    const newBug = {
      ...formData,
    };
    // setNewBug({
    //   ...formData,
    // });
    console.log(newBug);
    dispatch(sendNewBugsToServer(newBug));
    dispatch(getBugsFromServer());
    resetForm();
    history.push('/bug-tracker/bugs-list');
    //setNewBug(null);
    //submitNewBug();
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

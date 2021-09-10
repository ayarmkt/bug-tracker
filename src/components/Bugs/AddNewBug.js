import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
//import { useContext } from 'react';

import useForm from '../../hooks/useForm';
import BugForm from './BugForm/BugForm';
import {
  sendNewBugsToServer,
  getBugsFromServer,
} from '../../store/bug-actions';

const AddNewBug = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //const authCtx = useContext(AuthContext);

  //if (!authCtx.token) history.replace('/bug-tracker/login');

  const initialFormState = {
    title: '',
    details: '',
    steps: '',
    // version: '',
    status: '',
    priority: '',
    assigned: '',
    creator: '',
  };

  const resetFormState = {
    title: '',
    details: '',
    steps: '',
    // version: '',
    status: '',
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
    console.log(formData);
    console.log(formData.priority);
    const newBug = {
      ...formData,
    };
    // setNewBug({
    //   ...formData,
    // });
    //console.log(newBug);
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

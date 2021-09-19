import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import useForm from '../../hooks/useForm';
import BugForm from './BugForm/BugForm';
import {
  sendUpdatedBugToServer,
  getBugsFromServer,
} from '../../store/bug-actions';

const EditBug = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { selectedBug } = useSelector((state) => state.bugs);
  const selectedBugKey = selectedBug.key;

  const initialFormState = {
    title: selectedBug.title,
    details: selectedBug.details,
    steps: selectedBug.steps,
    status: selectedBug.status,
    priority: selectedBug.priority,
    assigned: selectedBug.assigned,
    creator: selectedBug.creator,
  };

  const resetFormState = {
    title: '',
    details: '',
    steps: '',
    status: '',
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

    const updatedBug = {
      ...formData,
      time: enteredTime,
      id: enteredId,
      key: selectedBugKey,
    };

    dispatch(sendUpdatedBugToServer(updatedBug, selectedBugKey));
    dispatch(getBugsFromServer());

    resetForm();
    history.push('/bugs-list');
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
      btnText='Save'
    />
  );
};

export default EditBug;

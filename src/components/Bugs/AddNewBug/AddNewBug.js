import classes from './AddNewBug.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { addNewBugs } from '../../../store/bug-slice';
import Button from '../../../UI/Button';
import useForm from '../../../hooks/useForm';

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
    <div className={classes.container}>
      <h1>Add New Bug</h1>
      <form className={classes['bug-form']} onSubmit={submitNewBugHandler}>
        <div className={classes['add-bug-form']}>
          <div className={classes['add-bug-input']}>
            <label>Title</label>
            <input
              type='text'
              name='title'
              placeholder='enter title'
              onChange={handleInputChange}
              value={formData.title}
            />
          </div>
          <div className={classes['add-bug-textarea']}>
            <label>Details</label>
            <textarea
              type='text'
              name='details'
              placeholder='enter details'
              onChange={handleInputChange}
              value={formData.details}
            />
          </div>
          <div className={classes['add-bug-textarea']}>
            <label>Steps</label>
            <textarea
              type='text'
              name='steps'
              placeholder='enter steps'
              onChange={handleInputChange}
              value={formData.steps}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Version</label>
            <input
              type='text'
              name='version'
              placeholder='enter version'
              onChange={handleInputChange}
              value={formData.version}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Priority</label>
            <select
              name='priority'
              onChange={handleInputChange}
              value={formData.priority}
            >
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
              name='assigned'
              placeholder='enter assigned person'
              onChange={handleInputChange}
              value={formData.assigned}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Creator</label>
            <input
              type='text'
              name='creator'
              placeholder='enter creator'
              onChange={handleInputChange}
              value={formData.creator}
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

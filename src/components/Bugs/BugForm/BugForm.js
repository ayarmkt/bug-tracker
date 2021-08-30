import classes from './BugForm.module.css';
import React from 'react';
import Button from '../../../UI/Button';

const BugForm = ({ title, onSubmit, onChange, formData, onClick, btnText }) => {
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <form className={classes['bug-form']} onSubmit={onSubmit}>
        <div className={classes['add-bug-form']}>
          <div className={classes['add-bug-input']}>
            <label>Title</label>
            <input
              type='text'
              name='title'
              placeholder='enter title'
              onChange={onChange}
              value={formData.title}
            />
          </div>
          <div className={classes['add-bug-textarea']}>
            <label>Details</label>
            <textarea
              type='text'
              name='details'
              placeholder='enter details'
              onChange={onChange}
              value={formData.details}
            />
          </div>
          <div className={classes['add-bug-textarea']}>
            <label>Steps</label>
            <textarea
              type='text'
              name='steps'
              placeholder='enter steps'
              onChange={onChange}
              value={formData.steps}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Version</label>
            <input
              type='text'
              name='version'
              placeholder='enter version'
              onChange={onChange}
              value={formData.version}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Priority</label>
            <select
              name='priority'
              onChange={onChange}
              value={formData.priority}
            >
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
              onChange={onChange}
              value={formData.assigned}
            />
          </div>
          <div className={classes['add-bug-input']}>
            <label>Creator</label>
            <input
              type='text'
              name='creator'
              placeholder='enter creator'
              onChange={onChange}
              value={formData.creator}
            />
          </div>
        </div>
        <Button
          type='submit'
          disabled={false}
          className={classes['submit-btn']}
          onClick={onClick}
          text={btnText}
        />
      </form>
    </div>
  );
};

export default BugForm;

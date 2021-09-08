import classes from './BugForm.module.css';
import React from 'react';
import Button from '../../../UI/Button/Button';
import H1 from '../../../UI/H1/H1';
import Card from '../../../UI/Card/Card';

const BugForm = ({ title, onSubmit, onChange, formData, onClick, btnText }) => {
  return (
    // <div className={classes.container}>
    <Card>
      <H1 title={title} />
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
            <label>Status</label>
            {/* <input
              type='text'
              name='version'
              placeholder='enter version'
              onChange={onChange}
              value={formData.version}
            /> */}
            <select name='status' onChange={onChange} value={formData.status}>
              <option value='New'>New</option>
              <option value='Assigned'>Assigned</option>
              <option value='Fixed'>Fixed</option>
              <option value="Won't Fix">Won't Fix</option>
              <option value='Duplicate'>Duplicate</option>
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
        <div className={classes.btn}>
          <Button
            type='submit'
            disabled={false}
            className={classes['submit-btn']}
            onClick={onClick}
            text={btnText}
          />
        </div>
      </form>
      {/* </div> */}
    </Card>
  );
};

export default BugForm;

//import classes from './UpdateBug.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { useEffect } from 'react';

import useForm from '../../hooks/useForm';
import BugForm from './BugForm/BugForm';
import {
  sendUpdatedBugToServer,
  getBugsFromServer,
} from '../../store/bug-actions';
import { storeSelectedBug } from '../../store/bug-slice';

const EditBug = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  //const authCtx = useContext(AuthContext);

  //if (!authCtx.token) history.replace('/bug-tracker/login');

  //const { bugs } = useSelector((state) => state.bugs);
  //console.log(bugs);
  // const selectedBug = bugs.find((bug) => bug.id === params.bugId);
  // console.log(selectedBug);
  // const selectedBugKey = selectedBug.key;
  // console.log(selectedBugKey);

  const { selectedBug } = useSelector((state) => state.bugs);
  const selectedBugKey = selectedBug.key;
  console.log(selectedBugKey);


  //let storedBug;
  // useEffect(()=>{
  //   if(selectedBug){
  //     localStorage.setItem('selectedBug', JSON.stringify(selectedBug))
  //     dispatch(storeSelectedBug(selectedBug));
  //     console.log(`seectedBug storing is ${JSON.stringify(selectedBug)}`);
  //     //console.log('set item running');
  //   } else{
  //     //setLoading(true)
  //     let storedBug = JSON.parse(localStorage.getItem('selectedBug'));
  //     dispatch(storeSelectedBug(storedBug));
  //     console.log(`storedBug is ${JSON.stringify(storedBug)}`);
  //     //console.log('get item running');
  //     //setLoading(false)
  //   }
  // },[])


  const initialFormState = {
    title: selectedBug.title,
    details: selectedBug.details,
    steps: selectedBug.steps,
    // version: selectedBug.version,
    status: selectedBug.status,
    priority: selectedBug.priority,
    assigned: selectedBug.assigned,
    creator: selectedBug.creator,
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
    //const storedBugs = await getBugsFromServer();
    //await dispatch(getBugs(storedBugs));
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

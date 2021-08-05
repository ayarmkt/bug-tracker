import classes from './Login.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Controllers/store/auth-slice';
import useInputValidation from '../../Controllers/hooks/useInputValidation';
//import Button from '../UI/Button';

const Login = () => {
  const dispatch = useDispatch();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueTouchedHandler: nameTouchedHandler,
    resetValue: resetName,
  } = useInputValidation((value) => value.trim() !== '');

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueTouchedHandler: passwordTouchedHandler,
    resetValue: resetPassword,
  } = useInputValidation((value) => value.trim().length !== 0);

  let formIsValid = false;
  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    dispatch(
      authActions.login({ name: enteredName, password: enteredPassword })
    );
    resetName();
    resetPassword();
  };

  return (
    <div className={classes['login-bg']}>
      <form className={classes['login-form']} onSubmit={submitLoginHandler}>
        <h1>Login</h1>
        <div className={classes['login-item']}>
          <label>Username</label>
          <input
            name='name'
            type='text'
            placeholder='name'
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameTouchedHandler}
          ></input>
          {nameHasError && <p>Enter a valid name.</p>}
        </div>
        <div className={classes['login-item']}>
          <label>Password</label>
          <input
            name='password'
            type='password'
            placeholder='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordTouchedHandler}
          ></input>
          {passwordHasError && <p>Enter a password (8 or more).</p>}
        </div>
        <button
          type='submit'
          className={classes['login-btn']}
          onClick={submitLoginHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import classes from './Login.module.css';
import React, { useContext } from 'react';

import AuthContext from '../../Controllers/store/auth-context';
import useInputValidation from '../../Controllers/hooks/useInputValidation';

const Login = () => {
  // const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

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
    authCtx.login();
    // dispatch(
    //   authActions.login({ name: enteredName, password: enteredPassword })
    resetName();
    resetPassword();
  };

  // const nameInputClasses = nameHasError ? 'login-item invalid' : 'login-item';

  // const passwordInputClasses = passwordHasError
  //   ? 'login-item invalid'
  //   : 'login-item';

  return (
    <div className={classes['login-bg']}>
      <form className={classes['login-form']} onSubmit={submitLoginHandler}>
        <h1>Log In</h1>
        <div className={classes['login-items']}>
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
            {nameHasError && (
              <p className={classes.errorMsg}>Enter a valid name.</p>
            )}
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
            {passwordHasError && (
              <p className={classes.errorMsg}>Enter a password (8 or more).</p>
            )}
          </div>
        </div>

        <button
          type='submit'
          className={classes['login-btn']}
          onClick={submitLoginHandler}
        >
          Login
        </button>
        <div className={classes.options}>
          <p>Create new account</p>
          <p>Log in as a guest</p>
        </div>
      </form>
    </div>
  );
};

export default Login;

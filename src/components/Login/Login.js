import classes from './Login.module.css';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';

import useInputValidation from '../../hooks/useInputValidation';
import AuthContext from '../../store/auth-context';
import Button from '../../UI/Button';
import { webAPI } from '../../API';

//Guest Info
const guestEmail = 'guest@guest.com';
const guestPassword = 'abcdefg';

const Login = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueTouchedHandler: emailTouchedHandler,
    guestLoginHandler: guestEmailHandler,
    resetValue: resetEmail,
  } = useInputValidation((value) => value.trim().includes('@'));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueTouchedHandler: passwordTouchedHandler,
    guestLoginHandler: guestPasswordHandler,
    resetValue: resetPassword,
  } = useInputValidation((value) => value.trim().length !== 0);

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const switchFormHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const loginAsGuestHandler = () => {
    setIsLogin(true);
    guestEmailHandler(guestEmail);
    guestPasswordHandler(guestPassword);
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    const storeLoginData = async () => {
      setIsLoading(true);
      let url;

      // if (isLogin) {
      //   url =
      //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVDj_kpR2CpxzM-KKn0r3pdfMIa-hrUkE';
      // } else {
      //   url =
      //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVDj_kpR2CpxzM-KKn0r3pdfMIa-hrUkE';
      // }

      if (isLogin) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webAPI}`;
      } else {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${webAPI}`;
      }

      //Both sign up and log in
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        let errorMessage = 'Authentication failed';
        throw new Error(errorMessage);
      }

      const data = await response.json();
      //console.log(data);
      //console.log('Logged in');
      const tokenExpireTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, tokenExpireTime.toISOString());
      //console.log(authCtx);
      history.replace('/bugs-list');
    };

    storeLoginData().catch((error) => {
      console.log(error.message);
    });
    setIsLoading(false);
    resetEmail();
    resetPassword();
  };

  const optionText = isLogin
    ? 'Create new account'
    : 'Log in with an existing account';

  return (
    <div className={classes['login-bg']}>
      <form className={classes['login-form']} onSubmit={submitLoginHandler}>
        {isLogin && <h1>Log In</h1>}
        {!isLogin && <h1>Sign Up</h1>}
        <div className={classes['login-items']}>
          <div className={classes['login-item']}>
            <label>Email</label>
            <input
              className={emailHasError ? classes.inputInvalid : ''}
              name='email'
              type='text'
              placeholder='email'
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailTouchedHandler}
            ></input>
            {emailHasError && (
              <p className={classes.errorMsg}>Enter a valid email.</p>
            )}
          </div>
          <div className={classes['login-item']}>
            <label>Password</label>
            <input
              className={passwordHasError ? classes.inputInvalid : ''}
              name='password'
              type='password'
              placeholder='password'
              minLength='8'
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordTouchedHandler}
            ></input>
            {passwordHasError && (
              <p className={classes.errorMsg}>Enter a password (8 or more).</p>
            )}
          </div>
        </div>

        {!isLoading && (
          <Button
            type='submit'
            disabled={!formIsValid}
            className={classes['login-btn']}
            onClick={submitLoginHandler}
            text={isLogin ? 'Log In' : 'Sign Up'}
          />
        )}
        {/* {!isLoading && (
          <button
            type='submit'
            disabled={!formIsValid}
            className={classes['login-btn']}
            onClick={submitLoginHandler}
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        )} */}
        {isLoading && <p>Loading...</p>}
        <div className={classes.options}>
          <p className={classes['new-account']} onClick={switchFormHandler}>
            {optionText}
          </p>
          <p className={classes.guest} onClick={loginAsGuestHandler}>
            Log in as a guest
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

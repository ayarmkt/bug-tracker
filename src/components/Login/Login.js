import classes from './Login.module.css';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import useAuthInputValidation from '../../hooks/useAuthInputValidation';
import AuthContext from '../../context/auth-context';
import Button from '../../UI/Button/Button';
import Notification from '../../UI/Notification/Notification';
import { showNotification } from '../../store/ui-slice';

const webAPI = process.env.REACT_APP_FIREBASE_API_KEY_DEV;
const guestEmail = process.env.REACT_APP_GUEST_EMAIL;
const guestPassword = process.env.REACT_APP_GUEST_PASSWORD;

const Login = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  //const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const { status, message } = useSelector((state) => state.ui.notification);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueTouchedHandler: emailTouchedHandler,
    guestLoginHandler: guestEmailHandler,
    resetValue: resetEmail,
  } = useAuthInputValidation((value) => value.trim().includes('@'));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueTouchedHandler: passwordTouchedHandler,
    guestLoginHandler: guestPasswordHandler,
    resetValue: resetPassword,
  } = useAuthInputValidation((value) => value.trim().length !== 0);

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

  const storeLoginDataHandler = async () => {
    const storeLoginData= async ()=>{
      //setIsLoading(true);
      dispatch(
        showNotification({
          status: 'pending',
          title: 'Sending...',
          message: isLogin ? 'Logging in...' : 'Signing up...',
        })
      );

      let url;
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
        throw new Error('Authentication failed');
      }

      const data = await response.json();
      const tokenExpireTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, tokenExpireTime.toISOString());
      //history.replace('/bug-tracker/bugs-list');
      //setIsLoading(false);
    }

    try{
      await storeLoginData();
      resetEmail();
      resetPassword();
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: isLogin ? 'Logged in successfully!' : 'Signed up successfully!',
        })
      );
      console.log(message)
      history.replace('/bugs-list');
    } catch(error) {
      //console.log(error.message);
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error',
          message: isLogin ? 'Cannot login' : 'Cannot sign up',
        })
      );
      console.log(message)
    }
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    storeLoginDataHandler()

    // const storeLoginData = async () => {
    //   setIsLoading(true);
    //   let url;

    //   if (isLogin) {
    //     url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webAPI}`;
    //   } else {
    //     url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${webAPI}`;
    //   }

    //   //Both sign up and log in
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: enteredEmail,
    //       password: enteredPassword,
    //       returnSecureToken: true,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   if (!response.ok) {
    //     let errorMessage = 'Authentication failed';
    //     throw new Error(errorMessage);
    //   }

    //   const data = await response.json();
    //   const tokenExpireTime = new Date(
    //     new Date().getTime() + +data.expiresIn * 1000
    //   );
    //   authCtx.login(data.idToken, tokenExpireTime.toISOString());
    //   history.replace('/bug-tracker/bugs-list');
    // };

    // storeLoginData().catch((error) => {
    //   console.log(error.message);
    // });
    // setIsLoading(false);
    // resetEmail();
    // resetPassword();
  };

  const optionText = isLogin
    ? 'Create new account'
    : 'Log in with an existing account';

  return (
    <div className={classes['login-bg']}>
      {status !== 'success'&& <Notification classname={classes.notification} message={message} />}
      <form className={classes['login-form']} onSubmit={submitLoginHandler}>
        <h1>Bug Tracker App</h1>
        {/* {isLogin && <h1>Log In</h1>}
        {!isLogin && <h1>Sign Up</h1>} */}
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

        <Button
          type='submit'
          disabled={!formIsValid}
          className={classes['login-btn']}
          onClick={submitLoginHandler}
          text={isLogin ? 'Log In' : 'Sign Up'}
        />
        
        {/* {isLoading && <p>Loading...</p>} */}
        <div className={classes.options}>
          <p className={classes['option-text']} onClick={switchFormHandler}>
            {optionText}
          </p>
          <div className={classes['guest-info']}>
            <p className={classes.guest} onClick={loginAsGuestHandler}>
              Log in as a guest
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

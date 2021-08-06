import classes from './Login.module.css';
import React from 'react';

//import AuthContext from '../../store/auth-context';
import useInputValidation from '../../hooks/useInputValidation';
import { useState } from 'react';

const Login = () => {
  // const dispatch = useDispatch();
  //const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueTouchedHandler: emailTouchedHandler,
    resetValue: resetEmail,
  } = useInputValidation((value) => value.trim().includes('@'));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueTouchedHandler: passwordTouchedHandler,
    resetValue: resetPassword,
  } = useInputValidation((value) => value.trim().length !== 0);

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const switchFormHandler = () => {
    setIsLogin(!isLogin);
  };

  // const loginAsGuestHandler = () => {
  //   setIsLogin(true);
  // };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    const fetchData = async () => {
      let url;

      if (isLogin) {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlED-kFrbIbIaqyCFmR8LC0oHlVko_ucI';
      } else {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlED-kFrbIbIaqyCFmR8LC0oHlVko_ucI';
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
        throw new Error('Smthg went wrong');
      }

      const data = await response.json();
      console.log(data);
      console.log('Logged in');
    };

    fetchData().catch((error) => {
      console.log(error.message);
    });

    //authCtx.login();
    // dispatch(
    //   authActions.login({ name: enteredName, password: enteredPassword })
    resetEmail();
    resetPassword();
  };

  // const nameInputClasses = nameHasError ? 'classes.inputInvalid' : '';

  // const passwordInputClasses = passwordHasError
  //   ? 'login-item invalid'
  //   : 'login-item';

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
          disabled={!formIsValid}
          className={classes['login-btn']}
          onClick={submitLoginHandler}
        >
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
        <div className={classes.options}>
          <p onClick={switchFormHandler}>{optionText}</p>
          <p>Log in as a guest</p>
        </div>
      </form>
    </div>
  );
};

export default Login;

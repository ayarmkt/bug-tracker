import classes from "./Login.module.css";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [enteredName, setEnteredName] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";

  const nameFormIsValid = nameIsValid && nameIsTouched;

  let formIsValid = false;
  if (nameFormIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameTouchedHandler = () => {
    setNameIsTouched(true);
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    console.log("logged in!");
  };

  return (
    <div>
      <h1>Login</h1>
      <form className={classes["login-form"]} onSubmit={submitLoginHandler}>
        <div className={classes["login-panel"]}>
          <label>Username</label>
          <input
            name="name"
            type="text"
            placeholder="name"
            onChange={nameChangeHandler}
            onBlur={nameTouchedHandler}
          ></input>
        </div>
        <div className={classes["login-panel"]}>
          <label>Password</label>
          <input name="password" type="password" placeholder="password"></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

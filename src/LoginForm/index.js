import React, { useState } from "react";
import classes from "./style.module.css";

const Login = ({backHandler}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password.length >= 8) {
      const data = {
        email,
        password,
      };
      console.log(data);

      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.flex}>
    <div onClick={backHandler} className={classes.cross}>X</div>
      <h3 className={classes.mainHeading}>Log in Form</h3>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Enter Email'
          value={email}
          onChange={emailChangeHandler}
        />
      </div>

      <div className='my'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter Password'
          value={password}
          onChange={passwordChangeHandler}
        />
      </div>

      <div className={classes.btn}>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

export default Login;

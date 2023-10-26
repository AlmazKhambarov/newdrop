/** @format */
import './Login.scss'
import React from "react";
const Login = () => {
  return (
    <div className='login'>
      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='Enter email' />
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter password' />
        <button>Submit</button>
        <p>or</p>
        <a href="/sign-up">Register</a>
      </form>
    </div>
  );
};

export default Login;

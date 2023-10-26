/** @format */

import React, { useState } from "react";
import "./Register.scss";
const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = ()=>{
    
  }
  return (
    <div className='register'>
      <form>
        <label htmlFor='username'>User Name</label>
        <input type='text' placeholder='Enter UserName' />
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='Enter email' />
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter password' />
        <button>Submit</button>
        <p>or</p>
        <a href='/'>Login</a>
      </form>
    </div>
  );
};

export default Register;

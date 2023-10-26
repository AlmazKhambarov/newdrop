/** @format */

import React, { useState } from "react";
import "./Register.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../api/firebase";

const Register = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      updateProfile(auth.currentUser, { displayName: data.username });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className='register'>
      <form onSubmit={handleSignUp}>
      <span style={{ color: "red" }}> {error}</span>
        <label htmlFor='username'>User Name</label>
        <input
          type='text'
          placeholder='Enter UserName'
          onChange={(e) =>
            setData((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='Enter email'
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='Enter password'
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button type='submit'>Submit</button>
        <p>or</p>
        <a href='/'>Login</a>
      </form>
    </div>
  );
};

export default Register;

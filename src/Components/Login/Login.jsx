/** @format */
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";
import React, { useState } from "react";
import { auth } from "../../api/firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      setError("Wrong email or password");
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <span style={{ color: "red" }}> {error}</span>
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
        <a href='/sign-up'>Register</a>
      </form>
    </div>
  );
};

export default Login;

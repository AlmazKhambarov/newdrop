/** @format */

import React, { useEffect, useState } from "react";
import "./User.scss";
import Sidebar from "../Sidebar/Sidebar";
import WestIcon from "@mui/icons-material/West";
import { auth } from "../../api/firebase";
const User = () => {
  var local = JSON.parse(localStorage.getItem("localUser"));
  const [user, setUser] = useState();
  const [data, setData] = useState({
    name: "",
  });
  useEffect(() => {
    auth.onAuthStateChanged((e) => {
      console.log(e);
      setData((p) => ({ ...p, name: e.displayName }));
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Sidebar />
      <div className='user__modal'>
        <a href={"/home"} className='back__icon'>
          <WestIcon />
        </a>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            className='form-control'
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default User;

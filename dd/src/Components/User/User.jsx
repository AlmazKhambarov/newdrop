/** @format */

import React from "react";
import "./User.scss";
import Sidebar from "../Sidebar/Sidebar";
import WestIcon from "@mui/icons-material/West";
const User = () => {
  return (
    <>
      <Sidebar />
      <div className='user__modal'>
        <a href={"/home"} className='back__icon'>
          <WestIcon />
        </a>
        <form>
          <label htmlFor=''>Name</label>
          <input type='text' className='form-control' />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default User;

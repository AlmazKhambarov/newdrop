/** @format */

import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faSignOut } from "@fortawesome/free-solid-svg-icons";
import User from "../User/User";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [showSetting, setShowSetting] = useState(true);
  console.log(showSetting);
  return (
    <div className='sidebar'>
      <button
        className={isSidebarOpen ? "btn click" : "btn"}
        onClick={toggleSidebar}>
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>

      <nav className={isSidebarOpen ? "sidebar-inner show" : "sidebar-inner"}>
        <a href='/home'>
          <div className='text'>Dropbox</div>
        </a>
        <ul>
          <li>
            <a>almaz@gmail.com</a>
          </li>

          <li>
            <a href='/user'>
              Settings <FontAwesomeIcon icon={faGear} />
            </a>
          </li>
          <li className='logout'>
            <a>
              Logout <FontAwesomeIcon icon={faSignOut} />{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

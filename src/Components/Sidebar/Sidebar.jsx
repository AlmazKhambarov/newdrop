import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faSignOut } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar">
      <button
        className={isSidebarOpen ? "btn click" : "btn"}
        onClick={toggleSidebar}
      >
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>

      <nav className={isSidebarOpen ? "sidebar-inner show" : "sidebar-inner"}>
        <div className="text">Dropbox</div>
        <ul>
          <li>
            <a>almaz@gmail.com</a>
          </li>

          <li>
            <a>
              Settings <FontAwesomeIcon icon={faGear} />
            </a>
          </li>
          <li className="logout">
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

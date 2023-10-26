/** @format */

import { Route, Routes, json } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Sidebar from "./Components/Sidebar/Sidebar";
import User from "./Components/User/User";
import Folder from "./Components/FolderModal/Folder";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useState } from "react";
import { auth } from "./api/firebase";

function App() {
  const [user, setUser] = useState("");
  auth.onAuthStateChanged((e) => {
    setUser(e);
    var localUser = JSON.parse(localStorage.getItem("localUser"));
    if (!localUser) {
      localStorage.setItem("localUser", JSON.stringify(e));
    }
  });
  var local = JSON.parse(localStorage.getItem("localUser"));

  return (
    <Routes>
      <Route path='/' element={local ? <HomePage /> : <Login />} />
      <Route path='/sign-up' element={!local ? <Register /> : <HomePage />} />
      <Route path='/home' element={local ? <HomePage /> : <Login />} />
      <Route path='/user' element={local ? <User /> : <Login />} />
      <Route path='/home/folder/:id' element={local ? <Folder /> : <Login />} />
    </Routes>
  );
}

export default App;

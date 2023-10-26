/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Sidebar from "./Components/Sidebar/Sidebar";
import User from "./Components/User/User";
import Folder from "./Components/FolderModal/Folder";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sign-up' element={<Register />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/user' element={<User />} />
      <Route path='/home/folder/:id' element={<Folder />} />
    </Routes>
  );
}

export default App;

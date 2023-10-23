import React from "react";
import FileTable from "../FileTable/FileTable";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="HomePage ">
      <div className="container">
        <div className="home-title">
          <h1>All Files</h1>
          <div className="buttons">
            <button className="create">Create</button>
            <button className="upload">Upload</button>
          </div>
        </div>
        <FileTable />
      </div>
    </div>
  );
}

export default HomePage;

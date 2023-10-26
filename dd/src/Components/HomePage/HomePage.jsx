/** @format */

import React, { useState } from "react";
import FileTable from "../FileTable/FileTable";
import "./HomePage.css";
import FolderModal from "../FolderModal/FolderModal";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Uploader from "../Uploader/Uploader";
function HomePage() {
  const [showCreate, setShowCreate] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const { createFolderLoading } = useSelector((state) => state.files);
  var dispatch = useDispatch();
  return (
    <>
      {createFolderLoading ? (
        <div className='load'>
          <div className='loader'></div>
        </div>
      ) : (
        <>
          <Sidebar />
          <div className='HomePage '>
            <div className='container'>
              <div className='home-title'>
                <h1>All Files</h1>
                <div className='buttons'>
                  {showCreate ? null : (
                    <button
                      className='create'
                      onClick={() => setShowCreate(!showCreate)}>
                      Create
                    </button>
                  )}
                  {showCreate ? (
                    <FolderModal setShowCreate={setShowCreate} folderId={1} />
                  ) : null}
                  <button
                    className='upload'
                    onClick={() => setShowUpload(!showUpload)}>
                    Upload
                  </button>
                  {showUpload ? <Uploader folderId={1} setShowUpload={setShowUpload}/> : null}
                </div>
              </div>
              <FileTable />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;

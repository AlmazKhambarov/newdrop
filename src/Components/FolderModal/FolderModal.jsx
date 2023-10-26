/** @format */

import React, { useState } from "react";
import "./FolderModal.scss";
import { useDispatch } from "react-redux";
import { createNewFolder } from "../../redux/extraReducer";
const FolderModal = ({ setShowCreate, folderId }) => {
  var local = JSON.parse(localStorage.getItem("localUser"));
  const [data, setData] = useState({
    folderName: "",
    useruid: local.uid,
    folderId: folderId,
  });
  console.log(local.uid);
  const handleClose = () => {
    setShowCreate(false);
  };

  const handleCreate = () => {
    if (data.folderName.length <= 0) {
      alert("Please Enter File Name");
    } else {
      dispatch(createNewFolder(data));
    }
  };
  console.log(data);
  var dispatch = useDispatch();
  return (
    <>
      <div className='create__modal'>
        <input
          type='text'
          placeholder='folder name....'
          onChange={(e) =>
            setData((prev) => ({ ...prev, folderName: e.target.value }))
          }
        />
        <div>
          <button className='cancel' onClick={handleClose}>
            cancel
          </button>
          <button className='create' onClick={handleCreate}>
            create
          </button>
        </div>
      </div>
    </>
  );
};

export default FolderModal;

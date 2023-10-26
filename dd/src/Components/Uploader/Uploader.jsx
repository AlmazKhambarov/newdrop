/** @format */

import React, { useState } from "react";
import "./Uploader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { uploadFile } from "../../redux/extraReducer";
import { useDispatch } from "react-redux";
const Uploader = ({ setShowUpload, folderId }) => {
  const [selectedFile, setSelectedFile] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    file: "",
    userUid: 1,
    folderId: folderId,
  });
  const handleChange = (choisede) => {
    setData((prev) => ({ ...prev, file: choisede.target.files[0] }));
    const file = choisede.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedFile(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadFile(data));
  };
  console.log(data);
  return (
    <>
      <div className='upload__modal'>
        <form onSubmit={handleSubmit}>
          <div className='close' onClick={() => setShowUpload(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          {selectedFile ? (
            <>
              <div className='card__img'>
                <img src={selectedFile ? selectedFile : null} alt='' />
              </div>
              <label className='name'>{data.file?.name}</label>
              <button className='upload'>Upload</button>
            </>
          ) : (
            <>
              <label htmlFor='file'>Select from Computer</label>
              <input type='file' id='file' onChange={handleChange} />
            </>
          )}
        </form>
      </div>
      <div className='w-screen'></div>
    </>
  );
};

export default Uploader;

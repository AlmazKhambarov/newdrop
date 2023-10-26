/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HomePage from "../HomePage/HomePage";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import FolderModal from "./FolderModal";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  faArrowLeftLong,
  faArrowRightLong,
  faDownload,
  faEye,
  faFile,
  faFolder,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFiles,
  getAllUserFiles,
  getAllUserFolder,
} from "../../redux/extraReducer";
import Uploader from "../Uploader/Uploader";
const Folder = () => {
  const { foldersData, createFolderLoading, filesData, deleteF } = useSelector(
    (state) => state.files
  );
  const [showUpload, setShowUpload] = useState(false);
  var local = JSON.parse(localStorage.getItem("localUser"));
  const [showCreate, setShowCreate] = useState(false);
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserFolder(local?.uid));
    dispatch(getAllUserFiles(local?.uid));
  }, [createFolderLoading, deleteF]);
  var navigate = useNavigate();
  var params = useParams();
  const filtredFiles = filesData?.filter((x) => x.folderId == params.id);
  const filtredData = foldersData?.filter((x) => x.folderId == params.id);
  const handleClickConfirm = (id, name) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteFiles({ id: id, name: name }));
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  return (
    <>
      {createFolderLoading || deleteF? (
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
                    <FolderModal
                      setShowCreate={setShowCreate}
                      folderId={params.id}
                    />
                  ) : null}
                  <button
                    className='upload'
                    onClick={() => setShowUpload(!showUpload)}>
                    Upload
                  </button>
                  {showUpload ? (
                    <Uploader
                      folderId={params.id}
                      setShowUpload={setShowUpload}
                    />
                  ) : null}
                </div>
              </div>
              <hr />
              <div className='navigations'>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  style={{ fontSize: "30px" }}
                  onClick={() => navigate(-1)}
                />
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  style={{ fontSize: "30px", marginLeft: "20px" }}
                  onClick={() => navigate(+1)}
                />
              </div>
              <div className='fileTable'>
                <table class='table'>
                  <tbody>
                    {filtredData?.map((el) => (
                      <tr onClick={() => navigate(`/home/folder/${el.id}`)}>
                        <td>
                          <FontAwesomeIcon icon={faFolder} /> {el.name}
                        </td>
                        <td>{moment(el.date.toDate()).format("L,LT")}</td>
                      </tr>
                    ))}
                    {filtredFiles.map((el) => (
                      <tr>
                        <td>
                          <FontAwesomeIcon icon={faFile} /> {el.filename}
                        </td>
                        <td>
                          <div className='icons'>
                            <a href={el.url}>
                              <FontAwesomeIcon icon={faDownload} />
                            </a>

                            <a href=''>
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                      
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => handleClickConfirm(el.id, el.name)}
                            />
                            {/* </a> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Folder;

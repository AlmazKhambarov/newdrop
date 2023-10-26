/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HomePage from "../HomePage/HomePage";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import FolderModal from "./FolderModal";
import {
  faDownload,
  faEye,
  faFile,
  faFolder,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserFolder } from "../../redux/extraReducer";
const Folder = () => {
  const { foldersData, createFolderLoading } = useSelector(
    (state) => state.files
  );
  const [showCreate, setShowCreate] = useState(false);
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserFolder(1));
  }, [createFolderLoading]);
  var navigate = useNavigate();
  var params = useParams();

  const filtredData = foldersData?.filter((x) => x.folderId == params.id);
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
                    <FolderModal
                      setShowCreate={setShowCreate}
                      folderId={params.id}
                    />
                  ) : null}
                  <button className='upload'>Upload</button>
                </div>
              </div>
              <hr />
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
                    {/* {files.map((el) => (
            <tr>
              <td>
                <FontAwesomeIcon icon={faFile} /> {el.name}
              </td>
              <td>
                <div className='icons'>
                  <FontAwesomeIcon icon={faDownload} />
                  <FontAwesomeIcon icon={faEye} />
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </td>
            </tr>
          ))} */}
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

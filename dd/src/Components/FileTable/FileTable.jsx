/** @format */

import React, { useEffect, useState } from "react";
import "./FileTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faFile,
  faFolder,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserFiles, getAllUserFolder } from "../../redux/extraReducer";
import moment from "moment";
import { useNavigate } from "react-router-dom";
function FileTable() {
  const { foldersData, filesData, createFolderLoading } = useSelector(
    (state) => state.files
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUserFolder(1));
    dispatch(getAllUserFiles(1));
  }, [createFolderLoading]);
  const filtredData = foldersData?.filter((x) => x.folderId == 1);
  const filtredFiles = filesData?.filter((x) => x.folderId == 1);
  return (
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
                  <a href=''>
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileTable;

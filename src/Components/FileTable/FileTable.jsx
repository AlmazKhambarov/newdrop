/** @format */

import React, { useEffect, useState } from "react";
import "./FileTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  faCopy,
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
import moment from "moment";
import { useNavigate } from "react-router-dom";
function FileTable() {
  var local = JSON.parse(localStorage.getItem("localUser"));
  const { foldersData, filesData, createFolderLoading, deleteF } = useSelector(
    (state) => state.files
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUserFolder(local?.uid));
    dispatch(getAllUserFiles(local?.uid));
  }, [createFolderLoading, deleteF]);
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
          onClick: () => alert("canceled"),
        },
      ],
    });
  };
  const [copy, setCopy] = useState(false);
  const copyText = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopy(true);
      alert("Succsesfuly copiyed");
    } catch (err) {
      console.error("Failed to copy link: ", err);
      setCopy(false);
    }
  };
  const filtredData = foldersData?.filter((x) => x.folderId == 1);
  const filtredFiles = filesData?.filter((x) => x.folderId == 1);
  console.log(foldersData);
  return (
    <>
      {deleteF ? (
        <div className='load'>
          <div className='loader'></div>
        </div>
      ) : (
        <>
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
                        <span onClick={() => copyText(el?.url)}>
                          <FontAwesomeIcon icon={faCopy} />
                        </span>
                        <a href=''>
                          <FontAwesomeIcon icon={faEye} />
                        </a>

                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleClickConfirm(el.id, el.name)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default FileTable;

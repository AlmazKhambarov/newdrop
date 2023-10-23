import React from "react";
import "./FileTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faFile,
  faFolder,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
function FileTable() {
  return (
    <div className="fileTable">
      <table class="table">
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faFolder} /> Home
            </td>
            <td>10/20/2023,3:09 PM</td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faFile} /> full-resume.pdf
            </td>
            <td>
              <div className="icons">
                <FontAwesomeIcon icon={faDownload} />
                <FontAwesomeIcon icon={faEye} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FileTable;

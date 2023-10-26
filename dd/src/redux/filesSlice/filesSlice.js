/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {
  createNewFolder,
  getAllUserFiles,
  getAllUserFolder,
  uploadFile,
} from "../extraReducer";
import { fas } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  loading: null,
  error: null,
  createFolderLoading: false,
  foldersData: [],
  filesData: [],
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewFolder.pending, (state, action) => {
        state.loading = true;
        state.createFolderLoading = true;
      })
      .addCase(createNewFolder.fulfilled, (state, action) => {
        state.createFolderLoading = false;
      })
      .addCase(createNewFolder.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(getAllUserFolder.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUserFolder.fulfilled, (state, action) => {
        state.loading = false;
        state.foldersData = action.payload;
      })
      .addCase(getAllUserFolder.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(uploadFile.pending, (state, action) => {
        state.createFolderLoading = true;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.createFolderLoading = false;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(getAllUserFiles.pending, (state, action) => {
        // state.filesData = a
        state.loading = true;
      })
      .addCase(getAllUserFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.filesData = action.payload;
      })
      .addCase(getAllUserFiles.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const {} = filesSlice.actions;
export default filesSlice.reducer;

/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../api/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
export const createNewFolder = createAsyncThunk(
  "create/folder",
  async (payload) => {
    const folder = {
      name: payload.folderName,
      userId: payload.useruid,
      type: "folder",
      folderId: payload.folderId,
      date: new Date(),
    };
    const folderRef = collection(firestore, "folders");

    await addDoc(folderRef, folder);
  }
);

export const getAllUserFolder = createAsyncThunk(
  "get/folder",
  async (userId, { rejectWithValue }) => {
    try {
      const filesRef = collection(firestore, "folders");
      const userFolder = query(filesRef, where("userId", "==", userId));
      const snapshot = await getDocs(userFolder);
      const folders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return folders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const uploadFile = createAsyncThunk("files/upload", async (data) => {
  const { file, userUid, folderId } = data;
  console.log(data);

  try {
    const storage = getStorage();
    const name = `${new Date()}_${file.name}`;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const snapshot = await uploadTask;

    const url = await getDownloadURL(snapshot.ref);

    const fileData = {
      name: name,
      filename: file.name,
      url: url,
      userId: userUid,
      folderId: folderId,
      type: "file",
      date: new Date(),
    };

    const docRef = await addDoc(collection(firestore, "files"), fileData);

    return {
      id: docRef.id,
      ...fileData,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const getAllUserFiles = createAsyncThunk(
  "files/fetchUserFilesfetchUserFile",
  async (userId, { rejectWithValue }) => {
    try {
      const filesRef = collection(firestore, "files");
      const userFilesQuery = query(filesRef, where("userId", "==", userId));
      const snapshot = await getDocs(userFilesQuery);
      const files = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return files;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

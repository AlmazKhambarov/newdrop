
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

//  Update the config
const firebaseConfig = {
    apiKey: "AIzaSyAWkdbPV5-HcKhLMVIVqZoSKkrI_yndAEg",
    authDomain: "diyorbek-9fa5d.firebaseapp.com",
    projectId: "diyorbek-9fa5d",
    storageBucket: "diyorbek-9fa5d.appspot.com",
    messagingSenderId: "134931902922",
    appId: "1:134931902922:web:5a3fe3ef826707a44d1f33",
    measurementId: "G-CQTHQCJH90"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app)


export { app, firestore, auth, storage };
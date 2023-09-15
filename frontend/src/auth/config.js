// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-9MWlbzAV0cqMvxd1BkkhOBmbRqLIz_g",
  authDomain: "ai-tool-directory-86ad5.firebaseapp.com",
  projectId: "ai-tool-directory-86ad5",
  storageBucket: "ai-tool-directory-86ad5.appspot.com",
  messagingSenderId: "1031455983188",
  appId: "1:1031455983188:web:7127fc6016dac659868fc1",
  measurementId: "G-Q3G71DBQPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
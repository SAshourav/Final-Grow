import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyC4kMTe3I1UN15oAG_7h43jgygO65iBD68",
  authDomain: "grow-bangla-implement.firebaseapp.com",
  projectId: "grow-bangla-implement",
  storageBucket: "grow-bangla-implement.appspot.com",
  messagingSenderId: "945836939784",
  appId: "1:945836939784:web:95284e4bfb637d09aa0fbd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export default app;
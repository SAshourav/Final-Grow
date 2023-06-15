import { createContext, useContext, useEffect, useState } from "react";
import { auth, storage } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  }

  const googleSignin = () =>{
    setLoading(true);
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth , googleAuthProvider)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = { user,loading, signUp, login, logOut, googleSignin };

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
//storage
export async function upload(file, currentUser, setLoading){
  const fileRef = ref(storage,'profilePics/' + currentUser.uid + '.png');

  setLoading(true);
  const snapshot = await uploadBytes(fileRef, file);

  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, {photoURL: photoURL})
  setLoading(false);
  alert("Profile Picture Uploaded");
}
import React, { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut, signInWithPopup, GoogleAuthProvider
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const createUserByGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = ()=>{
        setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
      } else {
        setUser(null)
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signOutUser, loginUser, loading , createUserByGoogle};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;


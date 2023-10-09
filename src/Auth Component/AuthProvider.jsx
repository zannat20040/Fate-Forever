import React, { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
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
          // console.log(currentUser)
        setUser(currentUser);
        setLoading(false)
      } else {
        // console.log("no user to observe");
        setUser(null)
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser,  loginUser, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;


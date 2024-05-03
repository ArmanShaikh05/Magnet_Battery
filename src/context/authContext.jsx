import { createContext,  useEffect, useState } from "react";
import { auth } from "../utilities/firesbase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

/* eslint-disable react/prop-types */
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password);
  };

  const logout = () => {
    return signOut(auth)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth,email)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false)
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser,signup,login, logout, resetPassword}}>
        {!loading && children}
    </AuthContext.Provider>
  );
};



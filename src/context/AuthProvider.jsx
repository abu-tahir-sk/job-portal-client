import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firbase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
   const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
   const signOutUser = ()=>{
   return signOut(auth)
   }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser, "state captured");
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  const infoData = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser
  };
  return (
    <AuthContext.Provider value={infoData}>{!loading && children}</AuthContext.Provider>
  );
};

export default AuthProvider;

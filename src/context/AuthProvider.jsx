import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firbase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser, "state captured");
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("https://job-prtal-server.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => console.log("logIn token", res.data));
        setLoading(false);
      } else {
        axios
          .post(
            "https://job-prtal-server.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("logout", res.data);
            setLoading(false);
          });
      }
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
    signOutUser,
  };
  return (
    <AuthContext.Provider value={infoData}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

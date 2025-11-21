import axios from "axios";
import React, { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-prtal-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptor", error);

        if (error.status === 401 || error.status === 403) {
          console.log("need to the user");
          signOutUser().then(() => {
            console.log("logged out user");
            navigate("/signIn");
          });
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;

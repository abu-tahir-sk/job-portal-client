import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const UseAuth = () => {
  const content = useContext(AuthContext);
  return content;
};

export default UseAuth;

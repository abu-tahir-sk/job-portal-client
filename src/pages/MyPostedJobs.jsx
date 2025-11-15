import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = UseAuth([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return <div></div>;
};

export default MyPostedJobs;

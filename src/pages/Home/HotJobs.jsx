import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";
import { Link } from "react-router-dom";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {jobs.slice(0,6).map((job) => (
          <HotJobsCard key={job._id} job={job} />
        ))}
      </div>
      <Link to="/allJobs"><button className="btn my-6 ml-6">Show More Jobs</button></Link>
    </div>
  );
};

export default HotJobs;

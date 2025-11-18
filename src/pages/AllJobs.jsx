import { useEffect, useState } from "react";
import HotJobsCard from "./Home/HotJobsCard";

const AllJobs = () => {
       const [jobs, setJobs] = useState([]);
      
        useEffect(() => {
          fetch("http://localhost:5000/jobs")
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              setJobs(data);
            });
        },[]);
      return (
            <div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job} />
        ))}
      </div>
            </div>
      );
};

export default AllJobs;
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
      const {_id,title,company,deadline} = useLoaderData()
      return (
            <div className="flex flex-col justify-center items-center">
                  <h2 className="text-3xl">{title}</h2>
                  <p>{company}</p>
                  <p>{deadline}</p>
                  <Link to={`/jobApply/${_id}`}>
                  <button className="btn bg-primary">Apply now</button>
                  </Link>
            </div>
      );
};

export default JobDetails;
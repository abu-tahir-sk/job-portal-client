import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const { title, company, company_logo, location, description, requirements,salaryRange,_id } =
    job;
  return (
    <div className="card bg-base-100  shadow-xl">
      <div className="flex gap-2 m-3">
        <figure>
          <img className="w-16" src={company_logo} alt={title} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt size={18} />
            {location}
          </p>

          
        </div>
      </div>
      
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2
           flex-wrap mt-4">
            {requirements.map((skill, index) => (
              <p className="border rounded-md text-center px-2" key={index}>{skill}</p>
            ))}
          </div>
        <div className="card-actions justify-end items-center mt-4">

            <p className="flex items-center gap-3">Salary: <FaDollarSign/> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>

         <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary">Apply</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;

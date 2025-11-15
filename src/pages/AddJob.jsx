import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";

const AddJob = () => {
  const { user } = UseAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(min, max, currency, newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
      });
  };
  return (
    <div className="bg-white">
      <form onSubmit={handleAddJob} className="card-body">
        <div className="flex justify-center items-center w-full gap-6 py-3">
          <div className="flex w-full flex-col">
            <label className="label">Title</label>
            <input
              name="title"
              type="text"
              className="input w-full border-none "
              placeholder="Job title"
            />
          </div>
          {/* Job Location */}
          <div className="flex flex-col w-full">
            <label className="label">Job Location</label>
            <input
              name="location"
              type="text"
              className="input w-full border-none "
              placeholder="Job Location"
            />
          </div>
        </div>

        <div className="flex gap-6 pb-3">
          {/* job type */}
          <div className="flex flex-col w-full">
            <label className="label">Job Type</label>
            <select
              className="select select-ghost w-full"
              name="jobType"
              defaultValue={"Pick a Job type"}
            >
              <option disabled>Pick a Job type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* job Field */}
          <div className="flex flex-col w-full">
            <label className="label">Job Field</label>
            <select
              className="select select-ghost w-full"
              name="jobField"
              defaultValue={"Pick a Job Field"}
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>
        </div>
        {/* Salary range */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 pb-3 items-end">
          {/* min */}
          <div className="flex flex-col w-full">
            <label className="label">Salary range</label>
            <input
              name="min"
              type="text"
              className="input w-full border-none "
              placeholder="min"
            />
          </div>
          {/* max */}
          <div className="flex flex-col w-full">
            <input
              name="max"
              type="text"
              className="input w-full border-none"
              placeholder="max"
            />
          </div>
          {/* Currency */}
          <div className="flex flex-col w-full">
            <select
              className="select select-ghost w-full"
              name="currency"
              defaultValue={"Currency"}
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* job description */}

        <label className="label">description</label>

        <textarea
          className="textarea"
          name="description"
          placeholder="Job description"
        ></textarea>
        {/* Company Name */}
        <div className="flex flex-col w-full">
          <label className="label">Company Name</label>
          <input
            name="CompanyName"
            type="text"
            className="input w-full border-none "
            placeholder="Company Name"
          />
        </div>
        {/* requirements*/}
        <div className="flex flex-col w-full">
          <label className="label">Job Requirements</label>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="put each requirements in a new line"
          ></textarea>
        </div>
        {/* responsibilities */}
        <div className="flex flex-col w-full">
          <label className="label">Job Responsibilities</label>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Write each responsibility in a new line"
          ></textarea>
        </div>
        {/* HR Name */}
        <div className="flex flex-col w-full">
          <label className="label">HR Name</label>
          <input
            name="hr_name"
            type="text"
            className="input w-full border-none "
            placeholder="HR Name"
          />
        </div>
        {/* HR Email */}
        <div className="flex flex-col w-full">
          <label className="label">HR Email</label>
          <input
            name="hr_email"
            type="text"
            defaultValue={user?.email}
            className="input w-full border-none "
            placeholder="HR Email"
          />
        </div>
        {/* application Deadline */}
        <div className="flex flex-col w-full">
          <label className="label">Deadline</label>
          <input
            name="applicationDeadline"
            type="text"
            className="input w-full border-none "
            placeholder="Deadline"
          />
        </div>
        {/* company logo */}
        <div className="flex flex-col w-full">
          <label className="label">Company logo</label>
          <input
            name="company_logo"
            type="text"
            className="input w-full border-none "
            placeholder="Company Logo URL"
          />
        </div>
        {/* submit button */}

        <button className="btn bg-[#D2B48C]  mt-4">Submit</button>
      </form>
    </div>
  );
};

export default AddJob;

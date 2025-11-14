const AddJob = () => {
      return (
            <div>
                <form className="card-body" >
          <div className="flex justify-center items-center w-full gap-6 py-3">
            <div className="flex w-full flex-col">
              <label className="label">Coffee Name</label>
              <input
                name="name"
                type="text"
                className="input w-full border-none "
                placeholder="Coffee Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="label">Chef</label>
              <input
                name="chef"
                type="text"
                className="input w-full border-none "
                placeholder="Enter Coffee Chef"
              />
            </div>
          </div>

          <div className="flex gap-6 pb-3">
            <div className="flex flex-col w-full">
              <label className="label">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full border-none"
                placeholder="Enter coffee taste"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="label">Category</label>
              <input
                name="category"
                type="text"
                className="input w-full border-none bg-white"
                placeholder="Enter coffee category"
              />
            </div>
          </div>
          <div className="flex w-full gap-6 pb-3">
            <div className="flex flex-col w-full">
              <label className="label">Details</label>
              <input
                name="details"
                type="text"
                className="input w-full border-none "
                placeholder="Enter coffee details"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="label">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full border-none"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>

          <label className="label">Photo</label>
          <input
            type="url"
            name="photoURL"
            className="input w-full border-none "
            placeholder="Enter photo"
          />

          <button className="btn bg-[#D2B48C]  mt-4">add Coffee</button>
        </form>
            </div>
      );
};

export default AddJob;
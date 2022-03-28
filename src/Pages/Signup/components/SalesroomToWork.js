import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SalesroomToWork = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formValues, setFormValues] = useState({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="formbox grid">
      <div className="header  mb-4">
        <h2 className="text-[26px] font-medium">Put Salesroom to work</h2>
        <p className="text-gray-500 text-md">
          This will help us customise salesroom for you
        </p>
      </div>
      <div className="body pb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <label
                htmlFor="members"
                className="block mb-2 text-md font-medium text-gray-800"
              >
                How many members do you have in your organisation?
              </label>
              <select
                id="members"
                className="form-select"
                {...register("members")}
              >
                <option value="Eg. 5">Eg. 5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <span className="errormsg">
                {errors.Address1?.type === "required" && "Address1 is required"}
              </span>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="industry"
                className="block mb-2 text-md font-medium text-gray-800"
              >
                Which industry does your organisation belong to ?
              </label>
              <select
                id="industry"
                className="form-select"
                {...register("industry")}
              >
                <option value="Eg. Engineering tools">
                  Eg. Engineering tools
                </option>
                <option value="Software Developement">
                  Software Developement
                </option>
                <option value="Web Development">Web Development</option>
              </select>
              <span className="errormsg">
                {errors.Address1?.type === "required" && "Address1 is required"}
              </span>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="manufacture"
                className="block mb-2 text-md font-medium text-gray-800"
              >
                What does your company manufacture ?
              </label>
              <select
                id="manufacture"
                className="form-select"
                {...register("manufacture")}
              >
                <option value="Eg. Furnace machines">
                  Eg. Furnace machines
                </option>
                <option value="Eg. Furnace machines">
                  Eg. Furnace machines
                </option>
                <option value="Eg. Furnace machines">
                  Eg. Furnace machines
                </option>
              </select>
              <span className="errormsg">
                {errors.Address1?.type === "required" && "Address1 is required"}
              </span>
            </div>
            <div className="col-span-4 flex justify-between">
              <a href="/">SKIP</a>
              <button type="submit">Done</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalesroomToWork;

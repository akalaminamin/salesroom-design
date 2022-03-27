import React, { useState } from "react";
// import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import './CSS/SalesroomForm.css'

const CompanyLogoWebsite = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = handleSubmit((data) => formData(data));

    const [formValues, setFormValues] = useState({
      website: "",
    });

    const handleChange = (e) => {
      const values = e.target.value;
      setFormValues({ ...formValues, [e.target.name]: values });
    };

    const formData = (data) => {
      if (!data) {
        alert("all field is empty");
      }
      console.log(data);
    };

    return (
      <div>
        <form>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                {...register("website", { required: true })}
                placeholder="Paste Website Link"
                name="website"
                autoComplete="off"
                value={formValues.website}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.website?.type === "required" &&
                  "Website link is required"}
              </span>
            </div>

            <div className="col-span-4 flex justify-between">
              <Link to="/">SKIP</Link>

              <button onClick={onSubmit}>Done</button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="formbox grid  ">
      <div className="header  mb-7">
        <h2 className="text-[26px] font-medium">
          Enter your company logo & Website
        </h2>
      </div>
      <div className="body pb-20">
        <SalesroomForm />
      </div>
    </div>
  );
};

export default CompanyLogoWebsite;

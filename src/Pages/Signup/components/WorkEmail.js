import React, { useState } from "react";
// import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import './CSS/SalesroomForm.css'

const WorkEmail = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const [formValues, setFormValues] = useState({
      email: "",
    });
    const onSubmit = (data) => {
      if (!data) {
        alert("all field is empty");
      }
    };
    const handleChange = (e) => {
      const values = e.target.value;
      setFormValues({ ...formValues, [e.target.name]: values });
    };

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                {...register("email", { required: true })}
                placeholder="Enter your work email"
                type="email"
                autoComplete="off"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.email?.type === "required" && "Email is required"}
              </span>
            </div>

            <div className="col-span-4 flex justify-between">
              <Link to="/">SKIP</Link>
              <button type="submit">Done</button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="formbox grid  ">
      <div className="header  mb-7">
        <h2 className="text-[26px] font-medium">Get started with Salesroom</h2>
      </div>
      <div className="body pb-20">
        <SalesroomForm />
      </div>
    </div>
  );
};

export default WorkEmail;

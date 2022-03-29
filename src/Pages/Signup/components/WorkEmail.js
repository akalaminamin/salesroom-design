import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const WorkEmail = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onTouched",
    });

    const [formValues, setFormValues] = useState({
      email: "",
    });
    const onSubmit = (data) => {};
    const handleChange = (e) => {
      const { name, value } = e.target.value;
      setFormValues({ ...formValues, [name]: value });
    };
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                placeholder="Enter your work email"
                type="email"
                autoComplete="off"
                onChange={handleChange}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              <span className="errormsg">
                {errors?.email && errors.email.message}
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

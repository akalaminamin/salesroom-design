import React, { useState } from "react";
// import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import './CSS/SalesroomForm.css'

const EnterPassword = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = handleSubmit((data) => formData(data));

    const [formValues, setFormValues] = useState({
      password: "",
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
                {...register("password", { required: true })}
                placeholder="Enter password"
                name="password"
                type="password"
                autoComplete="off"
                value={formValues.password}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.password?.type === "required" && "Password is required"}
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
        <h2 className="text-[26px] font-medium">Enter password</h2>
      </div>
      <div className="body pb-20">
        <p className="text-[#908787] mb-10">
          Password should be of minimum 8 characters
        </p>
        <SalesroomForm />
      </div>
    </div>
  );
};

export default EnterPassword;

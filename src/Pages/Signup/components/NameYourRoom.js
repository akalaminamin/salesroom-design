import React, { useState } from "react";
// import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import './CSS/SalesroomForm.css'

const NameYourRoom = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = handleSubmit((data) => formData(data));

    const [formValues, setFormValues] = useState({
      email: "",
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
                {...register("email", { required: true })}
                placeholder="Enter your work email"
                name="email"
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
        <h2 className="text-[26px] font-medium mb-5">Name your room</h2>
        <p className="text-[#908787] ">
          Store, create and share - all in one room
        </p>
      </div>
      <div className="body pb-20">
        <p className="mb-1 font-medium">Room name</p>
        <SalesroomForm />
      </div>
    </div>
  );
};

export default NameYourRoom;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const EnterPassword = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onTouched",
    });
    const [password, setPassword] = useState("");
    const onSubmit = (data) => {};
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                {...register("password", {
                  required: "password is required",
                  minLength:{
                    value:8,
                    message:"Password should be of minimum 8 characters"
                  },
                })}
                placeholder="Enter password"
                type="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="errormsg">
                {errors.password && errors.password.message}
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

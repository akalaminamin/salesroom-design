import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const EnterOTP = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onTouched",
    });

    const [otpCode, setOtpCode] = useState("");
    const onSubmit = (data) => {};
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                {...register("otp", { required: "Please enter OTP Code",})}
                type="number"
                placeholder="Enter OTP Code"
                name="otp"
                autoComplete="off"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
              />
              <span className="errormsg">
                {errors.otp && errors.otp.message}
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
        <h2 className="text-[26px] font-medium">
          Enter OTP sent to your email
        </h2>
      </div>
      <div className="body pb-20">
        <SalesroomForm />
      </div>
    </div>
  );
};

export default EnterOTP;

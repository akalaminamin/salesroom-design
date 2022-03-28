import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ setProvideEmail }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data) {
      alert("all field is empty");
    }
    setProvideEmail(false);
    navigate("/signup");
  };
  return (
    <>
      <div className=" h-screen">
        {/* a */}
        <div className="flex items-center px-8 py-3 h-fit">
          <div>
            <img
              src={require("../../Assets/images/icon/AplosLogo.png")}
              className="h-20 "
            />
          </div>
          <div className="flex gap-8 ml-auto">
            <Link to="/" className="text-[20px] font-semibold cursor-pointer">
              Login
            </Link>
            <Link
              to="GetStarted/Signup"
              className="btn-blue"
              onClick={() => setProvideEmail(true)}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* b */}
        <div className="grid grid-cols-3 h-[86vh]">
          <div className="left pl-16 flex flex-col justify-around">
            <div className="w-56">
              <h1 className="text-5xl font-semibold mb-14 leading-snug">
                Managing Industrial Content
              </h1>
              <p className="leading-6 font-normal">
                Salesroom helps you create, organise and share your manuals and
                catalogues in seconds
              </p>
            </div>
          </div>
          <div className="right col-span-2 pr-16 ml-auto pt-20 flex flex-col justify-around">
            <div>
              <div className="flex gap-28 items-center mb-20">
                <h1 className="text-8xl font-bold mb-10 text-[#174fba]">
                  Salesroom
                </h1>
                <img
                  src={require("../../Assets/images/icon/plan-icon.png")}
                  className="h-28"
                />
              </div>
              <form
                className="flex items-center w-fit ml-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="Enter Email"
                  className="input-signup bg-[#ecedf0] pl-8 pr-12 py-4 rounded-full relative -right-10 w-96"
                  style={{ marginBottom: 0 }}
                  {...register("email", { required: true })}
                />
                <span className="errormsg loginError">
                  {errors.email && "email input is required"}
                </span>
                <button
                  type="submit"
                  className="btn-black text-[22px] px-8 py-3 z-10"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import linkedin from "../../../Assets/images/image/linkedin.jpeg";
import Instagram from "../../../Assets/images/image/Instagram.jpeg";
import twitter from "../../../Assets/images/image/twitter.jpeg";
const SocialMediaLink = () => {
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
        <h2 className="text-[26px] font-medium">Enter social media links</h2>
        <p className="text-gray-500 text-md">
          This will help us customise salesroom for you
        </p>
      </div>
      <div className="body pb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <div className="flex justify-center mb-2">
                <div className="flex items-center mr-3">
                  <img className="w-10/12" src={linkedin} alt="linkedin" />
                </div>
                <input
                  className="!mb-0"
                  {...register("linkedin", { required: true })}
                  placeholder="Enter LinkedIn profile link"
                  autoComplete="off"
                />
                <span className="errormsg">
                  {errors.Address1?.type === "required" &&
                    "linkedin is required"}
                </span>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-center mb-2">
                <div className="flex items-center mr-3">
                  <img className="w-10/12" src={Instagram} alt="Instagram" />
                </div>
                <input
                  className="!mb-0"
                  {...register("Instagram", { required: true })}
                  placeholder="Enter Instagram profile link"
                  autoComplete="off"
                />
                <span className="errormsg">
                  {errors.Address1?.type === "required" &&
                    "twitter is required"}
                </span>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-center mb-2">
                <div className="flex items-center mr-3">
                  <img className="w-10/12" src={twitter} alt="twitter" />
                </div>
                <input
                  className="!mb-0"
                  {...register("twitter", { required: true })}
                  placeholder="Enter twitter profile link"
                  autoComplete="off"
                />
                <span className="errormsg">
                  {errors.Address1?.type === "required" &&
                    "twitter is required"}
                </span>
              </div>
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

export default SocialMediaLink;

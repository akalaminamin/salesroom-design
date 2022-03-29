import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CompanyLogoWebsite = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode:"onTouched"
    });

    const [webLink, setWebLink] = useState("");
    const onSubmit = (data) => {};
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                {...register("webLink", {
                  required: "Enter your website link",
                })}
                placeholder="Paste Website Link"
                autoComplete="off"
                value={webLink}
                onChange={(e) => setWebLink(e.target.value)}
              />
              <span className="errormsg">
                {errors.webLink && errors.webLink.message}
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

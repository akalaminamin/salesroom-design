import React, { useState } from "react";
// import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from "react-hook-form";
// import './CSS/SalesroomForm.css'

const CompanyAddress = () => {
  const SalesroomForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = handleSubmit((data) => formData(data));

    const [formValues, setFormValues] = useState({
      Address1: "",
      Address2: "",
      Landmark: "",
      PinCode: "",
      District: "",
      state: "",
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
                {...register("Address1", { required: true })}
                placeholder="Address 1"
                name="Address1"
                autoComplete="off"
                value={formValues.Address1}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.Address1?.type === "required" && "Address1 is required"}
              </span>
            </div>
            <div className="col-span-4">
              <input
                {...register("Address2", { required: true, maxLength: 20 })}
                placeholder="Address 2"
                name="Address2"
                autoComplete="off"
                value={formValues.Address2}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.Address2 && "Address2 is required"}
              </span>
            </div>

            <div className="col-span-3">
              <input
                {...register("Landmark", { required: true, maxLength: 20 })}
                placeholder="Landmark"
                name="Landmark"
                autoComplete="off"
                value={formValues.Landmark}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.Landmark && "Landmark input is required"}
              </span>
            </div>
            <div className="col-span-1">
              <input
                {...register("PinCode", {
                  required: true,
                  pattern: {
                    value: /\d+/,
                    message: "This input is number only.",
                  },
                })}
                placeholder="PinCode"
                name="PinCode"
                autoComplete="off"
                value={formValues.PinCode}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.PinCode && "Pin Code is required"}
              </span>
            </div>
            <div className="col-span-2">
              <input
                {...register("District", { required: true, maxLength: 20 })}
                placeholder="District"
                name="District"
                autoComplete="off"
                value={formValues.District}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.District && "District is required"}
              </span>
            </div>
            <div className="col-span-2">
              <input
                {...register("state", { required: true, maxLength: 20 })}
                placeholder="state"
                name="state"
                autoComplete="off"
                value={formValues.state}
                onChange={handleChange}
              />
              <span className="errormsg">
                {errors.state && "State name is required"}
              </span>
            </div>
            <div className="col-span-4 flex justify-between">
              <a href="/">SKIP</a>

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
        <h2 className="text-[26px] font-medium">Enter your company address</h2>
      </div>
      <div className="body pb-20">
        <SalesroomForm />
      </div>
    </div>
  );
};

export default CompanyAddress;

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
    } = useForm({
      mode: "onTouched",
    });
    const [roomName, setRoomName] = useState("");
    const onSubmit = (data) => {};
    console.log(errors)
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <input
                {...register("roomName", {
                  required: "Please enter your room name",
                })}
                type="text"
                placeholder="You can enter your company name"
                autoComplete="off"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
              <span className="errormsg">
                {errors.roomName && errors.roomName.message}
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

import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
        <Navbar />
      <div className="pt-24 h-[90vh] w-screen flex justify-center">
        <form method="" onSubmit={handleSubmit(onSubmit)} className="p-10">
          <h3 className="font-bold text-3xl">Contact Us</h3>
          <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-80 px-3 py-1 rounded-md outline-none border"
                {...register("name", { required: true })}
              />

              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 rounded-md outline-none border"
                {...register("email", { required: true })}
              />

              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Message */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 rounded-md outline-none border"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex mt-4 ">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
        </form>
      </div>
    </>
  );
}

export default Contact;

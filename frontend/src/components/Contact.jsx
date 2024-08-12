import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
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
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="dark:bg-slate-900 modal-box border shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-4xl">Contact Us</h3>
              <div className="mt-4 space-y-2 ">
                <span>Name:</span>
                <br />

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="dark:bg-slate-900 dark:border-white w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
                <br />

                <span>Email:</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="dark:bg-slate-900 dark:border-white w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                {/* Password */}
                <span>Password:</span>
                <br />

                <input
                  type="textbox"
                  placeholder="Enter Password"
                  className="dark:bg-slate-900 dark:border-white w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("textbox", { required: true })}
                />
                <br />
                {errors.textbox && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

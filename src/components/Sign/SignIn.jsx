import React from 'react'
import { useForm } from 'react-hook-form';


const required = {
  value: true,
  message: "This field is required",
};


const SignIn = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-lightGrey rounded-2xl p-4"
    >
      <img src="https://www.011global.com/Slices/011Logo_black.png" alt="" />
      <div className="flex flex-col pb-4">
        <label className="text-xs text-otherBlue font-semibold">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required })}
          className="border border-lightGrey rounded-xl py-2 px-4"
        />
        {errors.email && (
          <span className="text-red text-xs">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col pb-4">
        <label className="text-xs text-otherBlue font-semibold">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required })}
          className="border border-lightGrey rounded-xl py-2 px-4"
        />
        {errors.password && (
          <span className="text-red text-xs">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-otherBlue p-2 text-center text-white uppercase font-bold rounded-full w-full"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn
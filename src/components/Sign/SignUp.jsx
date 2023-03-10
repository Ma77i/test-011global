import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = ({ onSubmit, userError, setError }) => {
  // react hook form
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
      <img src="/logo.png" alt="" />
      <div className="flex flex-col pb-4">
        <label className="text-xs text-otherBlue font-semibold">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("Email", { required: "This field is required" })}
          className="border border-lightGrey rounded-xl py-2 px-4"
        />
        {errors.Email && (
          <span className="text-red text-xs">{errors.Email.message}</span>
        )}
      </div>

      <div className="flex flex-col pb-4">
        <label className="text-xs text-otherBlue font-semibold">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: "This field is required" })}
          className="border border-lightGrey rounded-xl py-2 px-4"
        />
        {errors.Password && (
          <span className="text-red text-xs">{errors.Password.message}</span>
        )}
      </div>
      {userError && (
        <span className="text-red text-xs text-center w-full">
          {userError}, please{" "}
          <Link to="/sign/login">
            <button onClick={() => setError(null)} className="underline">
              Login
            </button>
          </Link>
        </span>
      )}
      <button
        type="submit"
        className="bg-otherBlue p-2 text-center text-white uppercase font-bold rounded-full w-full"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;

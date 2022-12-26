import { useForm } from "react-hook-form";

const SignUp = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label for="email">email</label>
        <input {...register("email", { required: true })} className="rounded-lg border border-grey"/>
      </div>
      <div className="flex flex-col">
        <label for="password">password</label>
        <input {...register("password", { required: true })} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;

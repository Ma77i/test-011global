import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../api";
import SignIn from "../components/Sign/SignIn";
import SignUp from "../components/Sign/SignUp";

const buttonClasses =
  "text-center text-white font-bold uppercase px-4 py-2 bg-blueLight hover:bg-otherBlue ";

const SignContainer = () => {
  const param = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const DATA = { ...data, agentToken: import.meta.env.VITE_AGENT_TOKEN };
    console.log("dataSubmit: ", DATA);

    try {
      await API.post(`/UserLogin`, DATA);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // if (!param.sign) {
  //   return (
  //     <div>
  //       <img src="https://www.011global.com/Slices/011Logo_black.png" alt="" />
  //       <div>
  //         <Link to="/sign/login" className={buttonClasses}>
  //           Sign in
  //         </Link>
  //         <Link to="/sign/register" className={buttonClasses}>
  //           Sign up
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto w-4/12">
      {param.sign === "login" && <SignIn onSubmit={onSubmit} />}
      {param.sign === "register" && <SignUp onSubmit={onSubmit} />}
      {!param.sign && (
        <div>
          <img
            src="https://www.011global.com/Slices/011Logo_black.png"
            alt=""
          />
          <div>
            <Link to="/sign/login" className={buttonClasses}>
              Sign in
            </Link>
            <Link to="/sign/register" className={buttonClasses}>
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignContainer;

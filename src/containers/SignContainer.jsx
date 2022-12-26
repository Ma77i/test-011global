import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../api";
import SignIn from "../components/Sign/SignIn";
import SignUp from "../components/Sign/SignUp";
import { UserContext } from "../contexts/UserContext";

const buttonClasses =
  "text-center text-black font-bold uppercase px-4 py-2 bg-orange hover:text-white rounded-xl mx-1";

const SignContainer = () => {
  const param = useParams();
  const navigate = useNavigate();

  const { userError, setUserData, setUserError } = useContext(UserContext);

  const onSubmit = async (data) => {
    const AgentToken = import.meta.env.VITE_AGENT_TOKEN;
    const { Email } = data;

    // LOGIN SUBMIT
    if (param.sign === "login") {
      const DATA_LOGIN = { AgentToken, ...data };

      // if the user exists, log in and redirect to the stock view
      try {
        const res = await API.post(`/UserLogin`, DATA_LOGIN);
        setUserData(res.data.UserToken);
        res.data.ErrorCode === 2001 && setUserError(res.data.Error);
        res.data.ErrorCode === 0 && navigate("/stocks");
      } catch (err) {
        console.log(err);
      }
    }

    // REGISTER SUBMIT
    if (param.sign === "register") {
      const DATA_VERIFICATION = { AgentToken, Email };
      const DATA_REGISTER = { AgentToken, ...data };
      // send email verification
      const resVerif = await API.post("/SendVerificationEmail", DATA_VERIFICATION);

      // if verification is ok, register the user and send to login view
      if (resVerif.data.ErrorCode === 0) {
        try {
          const res = await API.post(`/AddUser`, DATA_REGISTER);
          res.data.ErrorCode === 2000 && setUserError(res.data.Error);
          res.data.ErrorCode === 0 && navigate("/sign/login");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div className="container mx-auto w-4/12 pt-20">
      
      {param.sign === "login" && (
        <SignIn onSubmit={onSubmit} userError={userError} setError={setUserError} />
      )}

      {param.sign === "register" && (
        <SignUp onSubmit={onSubmit} userError={userError} setError={setUserError} />
      )}

      {!param.sign && (
        <div>
          <img src="/logo.png" alt="" />
          <div className="w-full flex justify-center">
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

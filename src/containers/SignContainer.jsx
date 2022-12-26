import API from "../api"

const SignContainer = () => {

  const param 

    const onSubmit = async (data) => {
      try {
        const res = await API.post(`/api/sign/${param.sign}`, data);
        dispatch(modifyUser(res.data.user));
        dispatch(modifyAuth(res.data));
        navigate("/store");
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div>
      {param.sign === "login" && <SignIn onSubmit={onSubmit} />}
      {param.sign === "register" && <SignUp onSubmit={onSubmit} />}
    </div>
  );
}

export default SignContainer
import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const loginHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/login",
        loginData,

        {
          timeout: 2000,
        }
      );
      if (response.data.status === "success") {
        alert("Logged in sucessfully!");
        navigate("/", { replace: true });
      }
      // alert(response.data.message);
      const getAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", getAccessToken);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occured in the page");
      }
    }
  };
  return (
    <>
      To access Please,<b>Login</b> here first.
      <br />
      <form onSubmit={loginHandler}>
        Email:
        <br />
        <input type="text" ref={email} autoComplete="false" />
        <br />
        password:
        <br />
        <input type="password" ref={password} autoComplete="false" />sunav
        <br />
        <button>Login</button>
        <br />
      </form>
      <Link to="/">Home</Link>
    </>
  );
};
export default LoginPage;

import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
      }
      // alert(response.data.message);
      // const getAccessToken = response.data.accessToken;
      // localStorage.setItem("accessToken", getAccessToken);
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
      This is a login page
      <Link to="/">Home</Link>
      <br />
      <form onSubmit={loginHandler}>
        Email:
        <br />
        <input type="text" ref={email} autoComplete="false" />
        <br />
        password:
        <br />
        <input type="password" ref={password} autoComplete="false" />
        <br />
        <button>Login</button>
        <br />
      </form>
    </>
  );
};
export default LoginPage;

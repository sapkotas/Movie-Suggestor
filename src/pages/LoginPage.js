import axios from "axios";
import { useRef } from "react";

const LoginPage = () => {
  const email = useRef();
  const password = useRef();
  const loginHandler = async () => {
    // e.preventDefault();
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
      const getAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", getAccessToken);
      alert(response.data.message);
      if (response.data.status === "sucesss") {
        alert("Logged in sucesssfully");
      }
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

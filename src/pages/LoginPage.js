import axios from "axios";

const LoginPage = (e) => {
  const loginHandler = async () => {
    e.preventDefault();
    const loginData = {
      email: "dyno@gmail.com",
      password: "123456",
    };

    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/login ",
        loginData,
        {
          timeout: 10000,
        }
      );
      alert(response.data.message);
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
      Username:
      <br />
      <form onSubmit={loginHandler}>
        <input type="text" />
        <br />
        password:
        <br />
        <input type="password" />
        <br />
        <button>Login</button>
        <br />
      </form>
    </>
  );
};
export default LoginPage;

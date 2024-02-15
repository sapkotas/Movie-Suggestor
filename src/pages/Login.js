import axios from "axios";

const Login = () => {
  const loginHandler = async () => {
    // e.preventDefault();

    try {
      const response = await axios.post("");
    } catch (error) {}
  };
  return (
    <>
      This is a login page
      <br />
      Username:
      <br />
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="Username" />
        <br />
        password:
        <br />
        <input type="password" placeholder="password" />
        <br />
        <button>Login</button>
        <br />
      </form>
    </>
  );
};
export default Login;

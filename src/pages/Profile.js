import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/me ",

        {
          timeout: 1000,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(response);
      // navigate("/", { replace: true });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occured!");
      }
    }
  };

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return <button onClick={onLogout}>Logout</button>;hello
};
export default Profile;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const getAccessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/me ",

        {
          timeout: 1000,
          headers: {
            Authorization: `Bearer ${getAccessToken} `,
          },
        }
      );
      setUserData(response.data.data);
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
  return (
    <>
      <Link to ="/">Home</Link><br/><br/>
      Name:{userData.name}
      <br />
      Email;{userData.email}
      <br />
      Country:{userData.country} <br />
      <button onClick={onLogout}>Logout</button>
    </>sunabgit 
  );
};
export default Profile;

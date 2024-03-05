import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"; // Import navigate
import MovieNavBar from "../components/MovieNavBar";
import { Button, Container, Modal } from "react-bootstrap";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const getAccessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/me",
        {
          timeout: 10000,
          headers: {
            Authorization: `Bearer ${getAccessToken}`,
          },
        }
      );
      setUserData(response.data.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("Unknown error occurred! Try again later.");
      }
    }
  };

  const onLogout = () => {
    setModalShown(true);
  };

  return (
    <>
      <MovieNavBar />

      <Container className="mt-1">
        Name: {userData.name} <br />
        Email: {userData.email} <br />
        Country: {userData.country} <br />
        <br />
        <Button onClick={onLogout} variant="danger" type="button">
          Logout
        </Button>
      </Container>

      <Modal
        show={modalShown}
        onHide={() => {
          setModalShown(false);
        }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setModalShown(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              localStorage.removeItem("accessToken");
              Navigate("/"); // Use navigate instead of history
            }}
          >
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;

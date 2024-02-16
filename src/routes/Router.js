import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviePage from "../pages/MoviePage";
import ViewMovie from "../pages/ViewMovie";
import AddMovie from "../pages/AddMovie";
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route path="/view_movie/:id" element={<ViewMovie />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
};
export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviePage from "../pages/MoviePage";
import ViewMovie from "../pages/ViewMovie";
import AddMovie from "../pages/AddMovie";
import LoginPage from "../pages/LoginPage";

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
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
};
export default Router;

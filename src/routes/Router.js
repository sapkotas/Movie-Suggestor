import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviePage from "../pages/MoviePage";
import ViewMovie from "../pages/ViewMovie";
import AddMovie from "../pages/AddMovie";

const Router = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route path="/view_movie/:id" element={<ViewMovie />} />
            <Route path="/add" element={<AddMovie />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
};
export default Router;

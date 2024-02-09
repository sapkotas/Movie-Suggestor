import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviePage from "../pages/MoviePage";
import ViewMovie from "../pages/ViewMovie";

const Router = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route path="/view_movie/:id" element={<ViewMovie />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
};
export default Router;

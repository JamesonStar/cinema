import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import FilmPage from "./Pages/FilmPage";
import SeriesPage from "./Pages/SeriesPage";
import TrendingPage from "./Pages/TrendingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/film" element={<FilmPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/trending" element={<TrendingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

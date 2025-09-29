import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import FilmPage from "./Pages/FilmPage";
import SeriesPage from "./Pages/SeriesPage";
import TrendingPage from "./Pages/TrendingPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/trending" element={<TrendingPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

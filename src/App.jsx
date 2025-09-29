import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/trending" element={<TrendingPage />} />
        </Routes>
      </Router>
      <div className="bg-blue-500 text-amber-50">nigerr</div>
    </div>
  );
}

export default App;

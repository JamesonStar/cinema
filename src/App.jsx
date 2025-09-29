import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import FilmPage from "./Pages/FilmPage";
import SeriesPage from "./Pages/SeriesPage";
import TrendingPage from "./Pages/TrendingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollTop";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/film" element={<FilmPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
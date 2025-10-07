import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Halaman
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import MoviePage from './pages/MoviePage'
import SeriesPage from './pages/SeriesPage'
import TrendingPage from './pages/TrendingPage'

// Section
import Header from './section/Header'
import Footer from './section/Footer'

// Context
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="">
        <Router>
          <Header />

          {/* HAPUS BARIS INI JIKA ScrollToTopButton TIDAK ADA */}
          {/* <ScrollToTopButton /> */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
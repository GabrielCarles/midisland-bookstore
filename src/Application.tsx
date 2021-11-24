import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import { ThemeContext } from "context/ThemeContext";
import HomePage from "pages/HomePage";
import Footer from "components/Footer";
import RomancePage from "pages/RomancePage";
import KidsPage from "pages/KidsPage";
import ThrillerPage from "pages/ThrillerPage";
import NavBar from "components/NavBar";
import CookingPage from "pages/CookingPage";
import WishlistPage from "pages/WishlistPage";
import BookPage from "pages/BookPage";
import AuthenticationPage from "pages/AuthenticationPage";
import UsersPage from "pages/UsersPage";
import "config/i18n";

const App: React.FC<{}> = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`container${darkMode ? "-dark" : ""}`}>
      <Header />
      <NavBar />
      <section className="main_content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authenticate" element={<AuthenticationPage />} />
          <Route path="/book/:book_id" element={<BookPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/romance" element={<RomancePage />} />
          <Route path="/thriller" element={<ThrillerPage />} />
          <Route path="/cooking" element={<CookingPage />} />
          <Route path="/whishlist" element={<WishlistPage />} />
          {/* The next route should be conditioned */}
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  // DEFAULT LANGUAGE = ARABIC
  const [isArabic, setIsArabic] = useState(true);

  // RTL SUPPORT
  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
  }, [isArabic]);

  return (
<div className="min-h-screen bg-[#111827] text-white">
        <Header
        isArabic={isArabic}
        setIsArabic={setIsArabic}
      />

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home isArabic={isArabic} />}
        />

        <Route
          path="/about"
          element={<About isArabic={isArabic} />}
        />

        <Route
          path="/services"
          element={<Services isArabic={isArabic} />}
        />

        <Route
          path="/gallery"
          element={<Gallery isArabic={isArabic} />}
        />

        <Route
          path="/contact"
          element={<Contact isArabic={isArabic} />}
        />

        <Route
          path="/booking"
          element={<Booking isArabic={isArabic} />}
        />
      </Routes>

      <Footer isArabic={isArabic} />
    </div>
  );
}

export default App;
import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/homeComponents/Navbar";
import HeroSection from "../components/homeComponents/HeroSection";
import About from "../components/homeComponents/About";
import FeaturesSection from "../components/homeComponents/FeaturesSection";
import ReviewsSection from "../components/homeComponents/ReviewsSection";
import Blog from "../components/homeComponents/Blog";
import Footer from "../components/homeComponents/Footer";
import "../styles/Home.css";

function Home() {
  const { i18n } = useTranslation();

  return (
    <div className="home-container" dir={i18n.language === "ur" ? "rtl" : "ltr"}>
      <Navbar />
      <HeroSection />
      <About />
      <FeaturesSection />
      <ReviewsSection />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;

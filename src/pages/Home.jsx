import Navbar from "../components/homeComponents/Navbar";
import HeroSection from "../components/homeComponents/HeroSection";
import About from "../components/homeComponents/About";
import FeaturesSection from "../components/homeComponents/FeaturesSection";
import ReviewsSection from "../components/homeComponents/ReviewsSection";
import Blog from "../components/homeComponents/Blog";
import Footer from "../components/homeComponents/Footer";
import "../styles/Home.css"; 

function Home() {
  return (
    <div className="home-container">
    <Navbar />
    <HeroSection />
    <About/>
    <FeaturesSection />
    <ReviewsSection />
    <Blog/>
    <Footer /> 
  </div>
  );
}

export default Home;

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from "../../assets/Animation.json";

import { speakText } from "../../utils/tts";

const HeroSection = () => {
  const navigate = useNavigate();
  const lottieRef = useRef();

  const playAnimationAndSpeak = () => {
    lottieRef.current?.play();
    speakText("Hello! ", () => {
      lottieRef.current?.pause();
    });
  };

  useEffect(() => {
    playAnimationAndSpeak(); // 🔁 Run on load
  }, []);

  return (
    <section className="hero-section home1" id="home">
      <div className="hero-content">
        <h1 className="main-headline animate-text">
          <span className="highlight">Speech Therapy</span><br />
          <span className="fun-playful">Made Fun & Playful!</span>
        </h1>
        <p className="sub-headline animate-text-delay">
          Empowering children through interactive speech therapy exercises and engaging activities that make learning fun and effective.
        </p>
        
        <div className="cta-container">
          <button className="get-started-btn" onClick={() => navigate('/login')}>
            Start Your Journey <span className="btn-icon">→</span>
          </button>
        </div>
      </div>

      <div className="hero-image-container">
  <div className="container text-center">
    <div className="row justify-content-center">
     
        {/* Talking Character */}
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop
          autoplay={false}
          onClick={playAnimationAndSpeak}
          className="lottie-animation"
          style={{ cursor: "pointer", maxWidth: "300px", margin: "0 auto" }}
        />
      
    </div>
  </div>
</div>

    </section>
  );
};

export default HeroSection;

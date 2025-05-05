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
    speakText("Welcome to our fun speech therapy app! Click me anytime to hear a friendly greeting.", () => {
      lottieRef.current?.pause();
    });
  };

  useEffect(() => {
    playAnimationAndSpeak();
    return () => {
      // Clean up animation on unmount
      lottieRef.current?.destroy();
    };
  }, []);

  return (
    <section className="hero-section home1" id="home" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading" className="main-headline animate-text">
          <span className="highlight">Speech Therapy</span><br />
          <span className="fun-playful">Made Fun & Playful!</span>
        </h1>
        <p className="sub-headline animate-text-delay">
          Empowering children through interactive speech therapy exercises and engaging activities that make learning fun and effective.
        </p>
        
        <div className="cta-container">
          <button 
            className="get-started-btn" 
            onClick={() => navigate('/login')}
            aria-label="Start your speech therapy journey"
          >
            Start Your Journey <span className="btn-icon" aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="container text-center">
          <div className="row justify-content-center">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop
              autoplay={false}
              onClick={playAnimationAndSpeak}
              onKeyDown={(e) => e.key === 'Enter' && playAnimationAndSpeak()}
              className="lottie-animation"
              role="button"
              tabIndex="0"
              aria-label="Interactive character - click to hear greeting"
              style={{ 
                cursor: "pointer", 
                maxWidth: "300px",
                width: "100%",
                margin: "0 auto"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

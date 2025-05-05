import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from "../../assets/Animation.json";
<<<<<<< HEAD
=======

>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
import { speakText } from "../../utils/tts";

const HeroSection = () => {
  const navigate = useNavigate();
  const lottieRef = useRef();

  const playAnimationAndSpeak = () => {
    lottieRef.current?.play();
<<<<<<< HEAD
    speakText("Welcome to our fun speech therapy app! Click me anytime to hear a friendly greeting.", () => {
=======
    speakText("Hello! ", () => {
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
      lottieRef.current?.pause();
    });
  };

  useEffect(() => {
<<<<<<< HEAD
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
=======
    playAnimationAndSpeak(); // 🔁 Run on load
  }, []);

  return (
    <section className="hero-section home1" id="home">
      <div className="hero-content">
        <h1 className="main-headline animate-text">
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
          <span className="highlight">Speech Therapy</span><br />
          <span className="fun-playful">Made Fun & Playful!</span>
        </h1>
        <p className="sub-headline animate-text-delay">
          Empowering children through interactive speech therapy exercises and engaging activities that make learning fun and effective.
        </p>
        
        <div className="cta-container">
<<<<<<< HEAD
          <button 
            className="get-started-btn" 
            onClick={() => navigate('/login')}
            aria-label="Start your speech therapy journey"
          >
            Start Your Journey <span className="btn-icon" aria-hidden="true">→</span>
=======
          <button className="get-started-btn" onClick={() => navigate('/login')}>
            Start Your Journey <span className="btn-icon">→</span>
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
          </button>
        </div>
      </div>

      <div className="hero-image-container">
<<<<<<< HEAD
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
=======
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

>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
    </section>
  );
};

<<<<<<< HEAD
export default HeroSection;
=======
export default HeroSection;
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b

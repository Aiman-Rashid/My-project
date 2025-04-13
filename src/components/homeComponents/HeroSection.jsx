import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from "../../assets/Animation.json";
import { speakText } from "../../utils/tts"; // Import TTS function
import{useState} from 'react'

const HeroSection = () => {
  const navigate = useNavigate();

  const [hasSpoken, setHasSpoken] = useState(false);

  const handleAnimationClick = () => {
    if (!hasSpoken) {
      speakText("Hey there, little explorer! Are you ready to make your words shine? ");
      setHasSpoken(true); // Prevents speaking again
    }
  };
  return (
    <section className="hero-section home1" id="home">
      <div className="hero-content">
        <h1 className="main-headline animate-text">
          <span className="highlight">Speech Therapy</span>
          <br />
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
        {/* <div className="floating-shapes">
          {['🎈', '🌟', '✨', '🎨', '🎯', '🎪'].map((shape, index) => (
            <div key={index} className={`shape shape-${index + 1}`}>{shape}</div>
          ))}
        </div> */}
          <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <Lottie
                animationData={animationData}
                loop
                className="lottie-animation"
               onClick={handleAnimationClick} 
                style={{ cursor: "pointer" }} // Add cursor pointer for better UX
              />
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default HeroSection;

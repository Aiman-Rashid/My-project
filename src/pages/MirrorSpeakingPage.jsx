import { useState, useEffect } from "react";
import MirrorCamera from "../components/excercise/MirrorCamera.jsx";
import { FaRegSmile, FaSadTear, FaMicrophone, FaMagic, FaStar } from "react-icons/fa";
import "../styles/MirrorSpeakingPage.css";

const MirrorSpeakingPage = () => {
  const [isListening, setIsListening] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showStars, setShowStars] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [bounceTitle, setBounceTitle] = useState(false);

  // Add bounce animation to title periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setBounceTitle(true);
      setTimeout(() => setBounceTitle(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Function to trigger confetti on success
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Speech recognition function
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setIsListening(true);
    setShowStars(true);

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript.toLowerCase().trim();
      console.log("You said:", spoken);

      if (spoken.includes("good morning")) {
        setFeedbackMessage("✅ Great job! You said: 'Good morning'");
        setIsCorrect(true);
        triggerConfetti();
      } else {
        setFeedbackMessage(`❌ Oops! You said: "${spoken}". Try again!`);
        setIsCorrect(false);
      }

      setIsListening(false);
      setTimeout(() => setShowStars(false), 1000);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setFeedbackMessage("Error recognizing speech. Please try again.");
      setIsListening(false);
      setShowStars(false);
    };
  };

  return (
    <div className="mirror-speaking-container">
      {/* Background animations */}
      <div className="background-animation">
        {showStars && Array(20).fill().map((_, i) => (
          <div key={i} className="floating-star" style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 0.5}`
          }}>
            <FaStar className="star-icon" />
          </div>
        ))}
        
        {showConfetti && Array(50).fill().map((_, i) => (
          <div key={i} className="confetti" style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF69B4'][Math.floor(Math.random() * 5)],
            animationDuration: `${1 + Math.random() * 3}s`,
            width: `${5 + Math.random() * 7}px`,
            height: `${10 + Math.random() * 15}px`,
          }}></div>
        ))}
      </div>

      <div className="mirror-content">
        <h1 className={`mirror-title ${bounceTitle ? 'bounce' : ''}`}>
          <span className="magic-icon"><FaMagic /></span>
          <span className="mirror-emoji">🪞</span> Mirror Speaking
          <span className="magic-icon"><FaMagic /></span>
        </h1>

        <div className="mirror-card">
          <MirrorCamera />
          
          <div className="instruction-container">
            <h2 className="instruction-title">Look in the mirror and say:</h2>
            <p className="speech-prompt">
              <span className="speech-text">"Good morning!"</span>
            </p>
          </div>

          <button 
            className={`speak-button ${isListening ? 'listening' : ''}`}
            onClick={startSpeechRecognition}
            disabled={isListening}
          >
            <FaMicrophone className="mic-icon" />
            {isListening ? "I'm listening..." : "Tap to speak!"}
          </button>

          {feedbackMessage && (
            <div className={`feedback-container ${isCorrect ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}>
              <p className="feedback-message">{feedbackMessage}</p>
              <div className="feedback-icon">
                {isCorrect === true && <FaRegSmile className="happy-icon" />}
                {isCorrect === false && <FaSadTear className="sad-icon" />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MirrorSpeakingPage;
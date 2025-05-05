import React, { useState, useEffect } from "react";
import "../styles/PauseAndPlanKids.css";

const PauseAndPlanKidsPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showSpeakButton, setShowSpeakButton] = useState(false);
  const [bounceWord, setBounceWord] = useState(-1);
  const [stars, setStars] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const sentenceWords = ["I", "like", "to", "eat", "apples"];
  const fullSentence = sentenceWords.join(" ");

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const createStar = () => {
    const newStar = {
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 2 + 1
    };
    setStars(prev => [...prev, newStar]);
    setTimeout(() => {
      setStars(prev => prev.filter(star => star.id !== newStar.id));
    }, newStar.duration * 1000);
  };

  const speakText = (text) => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      utterance.onend = resolve;
      speechSynthesis.speak(utterance);
    });
  };

  const startPauseAndPlanExercise = async () => {
    setIsRunning(true);
    setFeedback("");
    setShowSpeakButton(false);
    setStars([]);

    for (let i = 0; i < sentenceWords.length; i++) {
      setBounceWord(i);
      await speakText(sentenceWords[i]);
      createStar();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setBounceWord(-1);
    setShowSpeakButton(true);
    setIsRunning(false);
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
    if (!SpeechRecognition) {
      setFeedback("Speech Recognition not supported in this browser.");
      return;
    }
  
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  
    recognition.start();
    setFeedback("Listening...");
  
    recognition.onresult = (event) => {
      let spokenText = event.results[0][0].transcript.trim().toLowerCase();
      console.log("User said:", spokenText);
  
      const normalize = (text) => text.replace(/\s+/g, " ").trim().toLowerCase();
      const expectedText = normalize(fullSentence);
  
      if (normalize(spokenText) === expectedText) {
        setFeedback("Great job! You said it perfectly!");
        setShowConfetti(true);
        for (let i = 0; i < 10; i++) {
          setTimeout(() => createStar(), i * 200);
        }
      } else {
        setFeedback(`Try again! You said: "${spokenText}"`);
      }
    };
  
    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setFeedback("I couldn't hear you. Let's try again!");
    };
  };

  return (
    <div className="pause-plan-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="pause-plan-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            fontSize: `${star.size}px`,
            animation: `pausePlanPulse ${star.duration}s infinite`
          }}
        >
          ⭐
        </div>
      ))}

      {showConfetti && (
        <div className="pause-plan-confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="pause-plan-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 20 - 20}%`,
                background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: `${Math.random() > 0.5 ? '50%' : '0'}`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="pause-plan-game-card">
        <div className="pause-plan-header">
          <div className="pause-plan-title-section">
            <h1 className="pause-plan-title">
              <span className="pause-plan-bounce-emoji">🗣</span> Pause and Plan Game!
            </h1>
            <div className="pause-plan-instructions">
              <p className="pause-plan-description">Listen to the words, then say them yourself!</p>
            </div>
          </div>
          
          <div className="pause-plan-animal-character">
            <div className="pause-plan-animal-emoji">🦁</div>
          </div>
        </div>

        <div className="pause-plan-words-container">
          {sentenceWords.map((word, index) => (
            <div
              key={index}
              className={`pause-plan-word ${bounceWord === index ? "pause-plan-word-active" : ""}`}
            >
              {word}
            </div>
          ))}
        </div>

        {feedback && (
          <div className={`pause-plan-feedback ${feedback.includes("Great") ? "pause-plan-feedback-success" : "pause-plan-feedback-retry"}`}>
            {feedback.includes("Great") ? "🎉 " : "🎯 "}
            {feedback}
          </div>
        )}

        <div className="pause-plan-buttons-container">
          <button
            onClick={startPauseAndPlanExercise}
            disabled={isRunning}
            className={`pause-plan-button pause-plan-listen-button ${isRunning ? "pause-plan-button-disabled" : ""}`}
          >
            {isRunning ? (
              <span className="pause-plan-button-content">
                <span className="pause-plan-bounce-emoji">🔊</span> Speaking...
              </span>
            ) : (
              <span className="pause-plan-button-content">
                <span>🔊</span> Listen to Words
              </span>
            )}
          </button>

          {showSpeakButton && (
            <button
              onClick={startSpeechRecognition}
              className="pause-plan-button pause-plan-speak-button"
            >
              <span className="pause-plan-pulse-emoji">🎤</span> Your Turn!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PauseAndPlanKidsPage;
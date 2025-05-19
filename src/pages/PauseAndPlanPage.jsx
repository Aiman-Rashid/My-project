// 
import React, { useState, useEffect } from "react";
import "../styles/PauseAndPlanKids.css";
import { useTranslation } from "react-i18next";

const PauseAndPlanKidsPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showSpeakButton, setShowSpeakButton] = useState(false);
  const [bounceWord, setBounceWord] = useState(-1);
  const [stars, setStars] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [completedSentences, setCompletedSentences] = useState([]);
    const { t, i18n } = useTranslation();

const sentences = [
  {
    en: ["I", "like", "to", "eat", "apples"],
    ur: ["میں", "سیب", "کھانا", "پسند", "کرتا", "ہوں"] // Correct Urdu order
  },
  {
    en: ["The", "sun", "is", "shining", "bright"],
    ur: ["سورج", "تیز", "چمک", "رہا", "ہے"] // Correct Urdu order
  },
  {
    en: ["My", "dog", "likes", "to", "play"],
    ur: ["میرا", "کتا", "کھیلنا", "پسند", "کرتا", "ہے"] // Correct Urdu order
  },
  {
    en: ["We", "go", "to", "school", "everyday"],
    ur: ["ہم", "روزانہ", "سکول", "جاتے", "ہیں"] // Correct Urdu order
  },
  {
    en: ["Let's", "read", "a", "book", "together"],
    ur: ["آؤ", "ایک", "کتاب", "پڑھیں", "مل", "کر"] // Correct Urdu order
  }
];



  const getCurrentSentence = () => {
    return i18n.language === 'ur' ? sentences[currentSentenceIndex].ur : sentences[currentSentenceIndex].en;
  };


    const getCurrentFullSentence = () => {
    return getCurrentSentence().join(" ");
  };

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

    const currentSentence = getCurrentSentence();
    
    for (let i = 0; i < currentSentence.length; i++) {
      setBounceWord(i);
      await speakText(currentSentence[i]);
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
      setFeedback(t("pausePlan.notSupported"));
      return;
    }
  
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  
    recognition.start();
setFeedback(t("pausePlan.listening"));
  
    recognition.onresult = (event) => {
      let spokenText = event.results[0][0].transcript.trim().toLowerCase();
      console.log("User said:", spokenText);
  
      const normalize = (text) => text.replace(/\s+/g, " ").trim().toLowerCase();
      const expectedText = normalize(getCurrentFullSentence());
  
      if (normalize(spokenText) === expectedText) {
     setFeedback(t("pausePlan.feedbackPerfect"));
        setShowConfetti(true);
        for (let i = 0; i < 10; i++) {
          setTimeout(() => createStar(), i * 200);
        }
        
        // Mark this sentence as completed
        setCompletedSentences(prev => [...prev, currentSentenceIndex]);
        
        // Move to next sentence or loop back
        setTimeout(() => {
          if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
          } else {
            setCurrentSentenceIndex(0);
          }
          setShowSpeakButton(false);
        }, 3000);
      } else {
       
setFeedback(t("pausePlan.feedbackRetry", { spokenText }));
      }
    };
  
    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
    setFeedback(t("pausePlan.couldntHear"));
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
        <div className={`pause-plan-header ${i18n.language === 'ur' ? 'urdu' : ''}`}>
          <div className="pause-plan-title-section">
            <h1 className="pause-plan-title">
           {i18n.language === 'ur' ? (
   
        <span>سوچیں، رکیں، بولیں
             <span className="pause-plan-bounce-emoji">🗣</span> </span>
      ) : (
        <span className="pause-plan-bounce-emoji">🗣
        <span>Pause and Plan Game</span></span>
      )}
            </h1>
            <div className="pause-plan-instructions">
            <p className="pause-plan-description">{t("pausePlan.description")}</p>
             
            </div>
          </div>
          
          <div className="pause-plan-animal-character">
            <div className="pause-plan-animal-emoji">🦁</div>
          </div>
        
        </div>



<div 
  className="pause-plan-words-container"
  dir={i18n.language === 'ur' ? 'rtl' : 'ltr'} // RTL for Urdu, LTR for others
>
  {getCurrentSentence().map((word, index) => (
    <div
      key={index}
      className={`pause-plan-word 
        ${bounceWord === index ? "pause-plan-word-active" : ""}
        ${i18n.language === 'ur' ? "pause-plan-word-urdu" : ""}
      `}
    >
      {word}
    </div>
  ))}
</div>


        {feedback && (
          <div className={`pause-plan-feedback ${feedback.includes(t("pausePlan.feedbackPerfect").split("!")[0]) ? "pause-plan-feedback-success" : "pause-plan-feedback-retry"}`}>
    {feedback.includes(t("pausePlan.feedbackPerfect").split("!")[0]) ? "🎉 " : "🎯 "}
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
      <span className="pause-plan-bounce-emoji">🔊</span> {t("pausePlan.speakingButton")}
    </span>
  ) : (
    <span className="pause-plan-button-content">
      <span>🔊</span> {t("pausePlan.listenButton")}
    </span>
  )}
</button>



          {showSpeakButton && (
            <button
              onClick={startSpeechRecognition}
              className="pause-plan-button pause-plan-speak-button"
            >
              <span className="pause-plan-pulse-emoji">🎤</span>   {t("pausePlan.speakButton")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PauseAndPlanKidsPage;
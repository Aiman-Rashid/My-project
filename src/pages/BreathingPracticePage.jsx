import React, { useState, useEffect } from "react";
import { Cloud, Sun, Moon } from "lucide-react";
import "../styles/BreathingPracticePage.css";
import { useTranslation } from "react-i18next";

const BreathingPracticePage = () => {

  const [secondsLeft, setSecondsLeft] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("ready");
  const [scale, setScale] = useState(1);
  
  const { t, i18n } = useTranslation();
  const isUrdu = i18n.language === "ur";



  // Phase text based on language
  const getPhaseText = () => {
    switch(currentPhase) {
      case "ready":
        return isUrdu ?  " ! تیار ہو جاؤ" : "Get Ready 🧘";
      case "in":
        return isUrdu ? "😮 سانس اندر کھینچیں" : "😮 Breathing In...";
      case "hold":
        return isUrdu ? "🤐 سانس روک کر رکھیں" : "🤐 Hold Breath...";
      case "out":
        return isUrdu ? " سانس باہر چھوڑیں" : "Breathe Out...";
      case "complete":
        return isUrdu ? "🎉 ورزش مکمل ہو گئی!" : "🎉 Exercise Complete!";
      default:
        return isUrdu ? "تیار ہو جاؤ! 🧘" : "Get Ready! 🧘";
    }
  };



  useEffect(() => {
    if (currentPhase === "in" || currentPhase === "hold") {
      setScale(1.4);
    } else if (currentPhase === "out") {
      setScale(1);
    } else {
      setScale(1);
    }
  }, [currentPhase]);

  const startBreathingExercise = () => {


    setIsRunning(true);
    setCurrentPhase("in");
    setSecondsLeft(4);
   
    speakText(isUrdu ? "گہرا سانس اندر لیں" : "Take a deep breath in...");

    startCountdown(4, () => {
      setCurrentPhase("hold");
      setSecondsLeft(4);

      speakText(isUrdu ? "اپنی سانس روک کر رکھیں" : "Hold your breath...");

      startCountdown(4, () => {
        setCurrentPhase("out");
        setSecondsLeft(4);

        speakText(isUrdu ? "اب آہستہ آہستہ سانس چھوڑیں" : "Now breathe out slowly...");

        startCountdown(4, () => {
          setCurrentPhase("complete");
          speakText(isUrdu ? "بہت اچھا! آپ نے ورزش مکمل کر لی" : "Great job! You completed the exercise!");


          setIsRunning(false);
        });
      });
    });
  };

  const startCountdown = (duration, callback) => {
    let time = duration;
    setSecondsLeft(time);

    const timer = setInterval(() => {
      time -= 1;
      setSecondsLeft(time);
      if (time <= 0) {
        clearInterval(timer);
        callback();
      }
    }, 1000);
  };



const speakText = (text) => {

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
   
};









  const getPhaseImage = () => {
    switch (currentPhase) {
      case "in":
        return (
          <div className="phase-icon-container">
            <Sun 
              size={120}
              className="icon icon-sun"
              style={{
                transform: `scale(${scale})`,
                transition: "transform 4s ease-in-out"
              }}
            />
          </div>
        );
      case "hold":
        return (
          <div className="phase-icon-container">
            <Moon 
              size={120}
              className="icon icon-moon"
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.4s ease-in-out"
              }}
            />
          </div>
        );
      case "out":
        return (
          <div className="phase-icon-container">
            <Cloud 
              size={120}
              className="icon icon-cloud"
              style={{
                transform: `scale(${scale})`,
                transition: "transform 4s ease-in-out"
              }}
            />
          </div>
        );
      case "complete":
        return <div className="phase-icon-container"><div className="complete-icon">🌟</div></div>;
      default:
        return <div className="phase-icon-container"><div className="ready-icon">🧘</div></div>;
    }
  };

  return (
    <div className="breathing-app">
      <div className="breathing-container" >
        <div className="header">
          <h1 className="title">
            Breathing Buddies
          </h1>
          <p className="subtitle1" >
            {isUrdu ? "💫آؤ کر دکھائیں" : "Let's breathe together!"}
          </p>
        </div>

        <div className="main-card">
          <div className="phase-text-container">
            <h2 className="phase-text">{getPhaseText()}</h2>
            {isRunning && <div className="seconds-countdown">{secondsLeft > 0 ? secondsLeft : ""}</div>}
          </div>

          <div className="phase-image-container">
            {getPhaseImage()}
          </div>

          {!isRunning && currentPhase === "ready" && (
            <div className="instructions">
              <p>{isUrdu ? "ہمارے ساتھ سانس لینے کی مشق کریں" : "Follow along with our breathing buddy!"}</p>
              <p>{isUrdu ? "ہم مل کر سانس اندر لیں گے، روکیں گے، اور پھر باہر چھوڑیں گے۔" : "We'll breathe in, hold, and breathe out together."}</p>
            </div>
          )}

          <div className="button-container">
            <button
              onClick={startBreathingExercise}
              disabled={isRunning}
              className={`start-button ${isRunning ? "disabled" : ""}`}
            >
              {isRunning ? 
                (isUrdu ?"!جاری رکھیں" :  "Keep Going!") : 
                (isUrdu ? "سانس لینے کی مشق شروع کریں" : "Start Breathing!")
              }
            </button>
          </div>
        </div>

        <div className="decorations">
          <div className="decoration-item rainbow">🌈</div>
          <div className="decoration-item unicorn">🦄</div>
          <div className="decoration-item star">🌟</div>
        </div>
      </div>
    </div>
  );
};

export default BreathingPracticePage;
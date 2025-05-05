import React, { useState, useEffect } from "react";
import { Cloud, Sun, Moon } from "lucide-react";
import "../styles/BreathingPracticePage.css";

const BreathingPracticePage = () => {
  const [tickAudio, setTickAudio] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [phaseText, setPhaseText] = useState("Get Ready! 🧘");
  const [currentPhase, setCurrentPhase] = useState("ready");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const tick = new Audio("/sounds/tick.mp3");
    tick.loop = true;
    setTickAudio(tick);

    // Preload other audios
    window.breathInAudio = new Audio("/sounds/breath-in.mp3");
    window.holdAudio = new Audio("/sounds/hold.mp3");
    window.breatheOutAudio = new Audio("/sounds/breath-out.mp3");

    return () => {
      tick.pause();
      tick.src = "";
    };
  }, []);

  useEffect(() => {
    if (currentPhase === "in" || currentPhase === "hold") {
      setScale(1.5);
    } else if (currentPhase === "out") {
      setScale(1);
    } else {
      setScale(1);
    }
  }, [currentPhase]);

  const startBreathingExercise = () => {
    if (tickAudio) {
      tickAudio.play();
    }

    setIsRunning(true);
    setPhaseText("😮 Breathing In...");
    setCurrentPhase("in");
    setSecondsLeft(5);
    playSound("breatheIn");
    speakText("Take a deep breath in...");

    startCountdown(5, () => {
      setPhaseText("🤐 Hold Breath...");
      setCurrentPhase("hold");
      setSecondsLeft(5);
      playSound("hold");
      speakText("Hold your breath...");

      startCountdown(5, () => {
        setPhaseText("🌬 Breathe Out...");
        setCurrentPhase("out");
        setSecondsLeft(5);
        playSound("breatheOut");
        speakText("Now breathe out slowly...");

        startCountdown(5, () => {
          setPhaseText("🎉 Exercise Complete!");
          setCurrentPhase("complete");
          speakText("Great job! You completed the exercise!");

          if (tickAudio) {
            tickAudio.pause();
            tickAudio.currentTime = 0;
          }
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

  const playSound = (type) => {
    const soundMap = {
      breatheIn: window.breathInAudio,
      hold: window.holdAudio,
      breatheOut: window.breatheOutAudio,
    };

    const sound = soundMap[type];
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
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
                transition: "transform 0.5s ease-in-out"
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
      <div className="breathing-container">
        <div className="header">
          <h1 className="title">Breathing Buddies</h1>
          <p className="subtitle">Let's breathe together!</p>
        </div>

        <div className="main-card">
          <div className="phase-text-container">
            <h2 className="phase-text">{phaseText}</h2>
            {isRunning && <div className="seconds-countdown">{secondsLeft > 0 ? secondsLeft : ""}</div>}
          </div>

          <div className="phase-image-container">
            {getPhaseImage()}
          </div>

          {!isRunning && currentPhase === "ready" && (
            <div className="instructions">
              <p>Follow along with our breathing buddy!</p>
              <p>We'll breathe in, hold, and breathe out together.</p>
            </div>
          )}

          <div className="button-container">
            <button
              onClick={startBreathingExercise}
              disabled={isRunning}
              className={`start-button ${isRunning ? "disabled" : ""}`}
            >
              {isRunning ? "Keep Going!" : "Start Breathing!"}
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
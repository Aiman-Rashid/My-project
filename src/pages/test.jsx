import React, { useState, useEffect } from "react";
import { Cloud, Sun, Moon } from "lucide-react";
import "../styles/BreathingPracticePage.css";

const BreathingPracticePage = () => {
  const [round, setRound] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const [phaseText, setPhaseText] = useState("Get Ready! 🧘");
  const [currentPhase, setCurrentPhase] = useState("ready");
  const [scale, setScale] = useState(1);



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
  if (isRunning || round >= 6) return; // Prevent overrun or double click

  const nextRound = round + 1;
  setRound(nextRound); // Will update async, use nextRound in logic below

  setIsRunning(true);
  setPhaseText("😮 Breathing In...");
  setCurrentPhase("in");
  setSecondsLeft(4);
  playSound("breatheIn");
  speakText("Take a deep breath in...");

  startCountdown(4, () => {
    setPhaseText("🤐 Hold Breath...");
    setCurrentPhase("hold");
    setSecondsLeft(4);
    playSound("hold");
    speakText("Hold your breath...");

    startCountdown(4, () => {
      if (nextRound <= 3) {
        setPhaseText("🌬 Breathe Out...");
        setCurrentPhase("out");
        setSecondsLeft(4);
        playSound("breatheOut");
        speakText("Now breathe out slowly...");

        startCountdown(4, () => {
          setPhaseText(`✅ Round ${nextRound} complete!`);
          speakText(`Great job! Round ${nextRound} complete!`);
          setIsRunning(false);
        });

      } else {
        // Speech round
        const speechSentences = [
          "I am brave.",
          "I can do it.",
          "Yes, I did it!",
        ];
        const sentence = speechSentences[nextRound - 4];
        setPhaseText(`🗣 Say: "${sentence}"`);
        speakText(sentence);
        setCurrentPhase("speak");
        setIsRunning(false);
      }
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
      <div className="breathing-container">
        <div className="header">
          <h1 className="title">Breathing Buddies</h1>
          <p className="subtitle1">Let's breathe together!</p>
         {round > 0 && round <= 6 && (
  <p className="subtitle2">Round {round} of 6</p>
)}
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
  disabled={isRunning || round >= 6}
  className={`start-button ${isRunning ? "disabled" : ""}`}
>
  {isRunning ? "In Progress..." : round === 0 ? "Start Breathing!" : "Next Round"}
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






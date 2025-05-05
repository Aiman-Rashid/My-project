<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/ArticulationGame.css";
import { speakText } from "../../utils/tts";
import articulationExercises from "../../data/soundData";
import CompletionOverlay from "../../components/ArticulationComponents/CompletionOverlay";
import LevelCompleteOverlay from "../../components/ArticulationComponents/LevelCompleteOverlay";
import TryAgainOverlay from "../../components/ArticulationComponents/TryAgainOverlay";
import wrongSound from '/assets/sounds/TryAgain.ogg';
import WordCard from "../../components/ArticulationComponents/WordCard";
import BasketArea from "../../components/ArticulationComponents/BasketArea";
import LoadingScreen from "../../components/ArticulationComponents/LoadingScreen";
import GameHeader from "../../components/ArticulationComponents/GameHeader";

// Main game component
const PSoundAGame = () => {
  const { soundId } = useParams();
  const exercise = articulationExercises[soundId];
  const totalLevels = Object.keys(exercise)
  .filter(key => key.startsWith('level'))
  .length;
console.log('Total levels detected:', totalLevels); // Should show 4
console.log('Available levels:', Object.keys(exercise).filter(key => key.startsWith('level'))); // Should show ['level1', 'level2', 'level3', 'level4']
  
  if (!exercise) return <div>Exercise not found</div>;
  
  // Game state
  const [currentLevel, setCurrentLevel] = useState(() => {
    const savedLevel = localStorage.getItem(`articulation-level-${soundId}`);
    return savedLevel ? parseInt(savedLevel) : 1;
  });
  const [currentLevelData, setCurrentLevelData] = useState(exercise[`level${currentLevel}`]);
  const [words, setWords] = useState(exercise[`level${currentLevel}`].exercises || []);
  const [progress, setProgress] = useState(0);
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false);
  const [showLevelCompleteOverlay, setShowLevelCompleteOverlay] = useState(false);
  const [showTryAgainOverlay, setShowTryAgainOverlay] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isAllow, setIsAllow] = useState(false);
  const [currentFailedWord, setCurrentFailedWord] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [currentTip, setCurrentTip] = useState("");
  const [attemptsPerWord, setAttemptsPerWord] = useState({});
  const [levelStars, setLevelStars] = useState(() => {
    const stars = {};
    for (let i = 1; i <= totalLevels; i++) {
      stars[i] = 5;
    }
    return stars;
  });
  const [showAnimation, setShowAnimation] = useState(false);
  // Refs
  const timeoutRef = useRef(null);
  const recognitionRef = useRef(null);
  const isRecognitionActive = useRef(false);
  const correctSoundRef = useRef(null);
  const wrongSoundRef = useRef(null);

  // Save level to localStorage
  useEffect(() => {
    localStorage.setItem(`articulation-level-${soundId}`, currentLevel.toString());
  }, [currentLevel, soundId]);

  // Set level data when level changes
  useEffect(() => {
    const levelData = exercise[`level${currentLevel}`];
    if (levelData) {
      setCurrentLevelData(levelData);
      setWords(levelData.exercises);
      setProgress(0);
      setAttemptsPerWord({});
      setCurrentTip("");
      setSelectedWord(null);
    }
  }, [currentLevel, exercise]);

  // Preload assets
  useEffect(() => {
    const loadAssets = async () => {
      try {
        correctSoundRef.current = new Audio(exercise.sound);
        wrongSoundRef.current = new Audio(wrongSound);
        
        if (currentLevelData.animation) {
          await new Promise((resolve) => {
            const img = new Image();
            img.src = currentLevelData.basket_img;
            img.onload = resolve;
          });
        }
        
        setAssetsLoaded(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading assets:", error);
        toast.error("Error loading game assets. Please refresh the page.");
        setIsLoading(false);
      }
    };

    loadAssets();
    return () => {
      if (correctSoundRef.current) correctSoundRef.current.pause();
      if (wrongSoundRef.current) wrongSoundRef.current.pause();
    };
  }, [exercise.sound, currentLevelData]);

  // Speech recognition handlers
  const startListening = (targetWordObj) => {
    if (!recognitionRef.current || isRecognitionActive.current || isListening) return;

    const recognition = recognitionRef.current;
    let resultProcessed = false;
  
    recognition.onresult = (event) => {
      const result = event.results[0];
      if (!result.isFinal || resultProcessed) return;
      
      resultProcessed = true;
      const transcript = result[0]?.transcript?.trim().toLowerCase();
  
      if (!transcript) {
        toast.error("Sorry, I didn't catch that. Try again!");
        setIsListening(false);
        return;
      }
  
      const targetWord = targetWordObj.word.toLowerCase();
      const pattern = new RegExp(`\\b${targetWord}\\b`, "i");
  
      if (pattern.test(transcript)) {
        handleWordSpoken(targetWordObj);
      } else {
        handleIncorrectWord(targetWordObj, transcript);
      }
  
      setIsListening(false);
    };
  
    recognition.onend = () => {
      setIsListening(false);
      isRecognitionActive.current = false;
    };
    
    recognition.onerror = (event) => {
      console.error("Recognition error:", event.error);
      if (event.error !== 'no-speech') toast.error(`Error: ${event.error}`);
      setIsListening(false);
      isRecognitionActive.current = false;
      resultProcessed = false;
    };
    
    recognition.start();
    setIsListening(true);
    isRecognitionActive.current = true;
  };

  const handleWordSpoken = (wordObj) => {
    setCurrentTip("");
    const remaining = words.filter((w) => w.word !== wordObj.word);
    setWords(remaining);
    
    const newProgress = Math.round(
      ((currentLevelData.exercises.length - remaining.length) /
      currentLevelData.exercises.length) * 100
    );
    
    setProgress(newProgress);
    playCorrectSound();
    
    setShowAnimation(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowAnimation(false);
      
      if (remaining.length === 0) {
        // Debug the current level and total levels
        console.log(`Current level: ${currentLevel}, Total levels: ${totalLevels}`);
        
        // Modified condition - use !== instead of <
        if (currentLevel !== totalLevels) {
          console.log("Showing level complete overlay");
          setShowLevelCompleteOverlay(true);
        } else {
          console.log("Showing final completion overlay");
          setShowCompletionOverlay(true);
        }
      }
    }, 2000);
  };
  const handleIncorrectWord = (wordObj, transcript) => {
    setAttemptsPerWord((prev) => {
      const currentAttempts = prev[wordObj.word] || 0;
      const updatedAttempts = currentAttempts + 1;

      if (updatedAttempts >= 2) {
        setCurrentFailedWord(wordObj);
        setShowTryAgainOverlay(true);
        wrongSoundRef.current.play();
        return { ...prev, [wordObj.word]: 0 };
      } else {
        toast.warning(`Oops! You said "${transcript}". Try again!`);
        wrongSoundRef.current.play();
        return { ...prev, [wordObj.word]: updatedAttempts };
      }
    });
  };

  const playCorrectSound = () => {
    if (correctSoundRef.current.readyState >= 2) {
      correctSoundRef.current.play();
    }
  };

  // Overlay handlers
  const closeOverlay = () => {
    setShowCompletionOverlay(false);
    navigate(exercise.nextRoute);
    localStorage.removeItem(`articulation-level-${soundId}`);
  };
  const proceedToNextLevel = () => {
    console.log(`Proceeding to next level from ${currentLevel}`);
    setShowLevelCompleteOverlay(false);
    setCurrentLevel(prev => {
      const nextLevel = prev + 1;
      console.log(`New level will be: ${nextLevel}`);
      return nextLevel;
    });
  };
  

  const tryAgainWord = () => {
    setShowTryAgainOverlay(false);
  };

  const moveToNextWord = () => {
    setShowTryAgainOverlay(false);
    if (currentFailedWord) {
      const remaining = words.filter((w) => w.word !== currentFailedWord.word);
      setWords(remaining);
      setCurrentFailedWord(null);
      
      setLevelStars(prev => ({
        ...prev,
        [currentLevel]: Math.max(1, prev[currentLevel] - 1),
      }));
      
      if (remaining.length === 0) {
        console.log(`Current level: ${currentLevel}, Total levels: ${totalLevels}`);
        if (currentLevel !== totalLevels) {
          setShowLevelCompleteOverlay(true);
        } else {
          setShowCompletionOverlay(true);
        }
      }
    }
  };

  const jumpToLevel = (levelNumber) => {
    levelNumber = Math.max(1, Math.min(totalLevels, levelNumber));
    const levelData = exercise[`level${levelNumber}`];
    if (!levelData) return;

    setCurrentLevel(levelNumber);
    setProgress(0);
    setCurrentTip("");
    setSelectedWord(null);
    setShowCompletionOverlay(false);
    setShowLevelCompleteOverlay(false);
    setShowTryAgainOverlay(false);
    setAttemptsPerWord({});
    setCurrentLevelData(levelData);
    setWords([...levelData.exercises]);
  };

  // Microphone initialization
  useEffect(() => {
    if (!assetsLoaded) return;

    const initMicrophone = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsAllow(true);

        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
          toast.error("Speech recognition not supported in this browser.");
          return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognitionRef.current = recognition;
      } catch (err) {
        console.warn("Microphone access denied:", err);
        toast.warn("Microphone access is required for this game. Please enable it.");
        setIsAllow(false);
      }
    };

    initMicrophone();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (recognitionRef.current) recognitionRef.current.abort();
    };
  }, [assetsLoaded]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const inOverlay = showCompletionOverlay || showTryAgainOverlay || showLevelCompleteOverlay;
      if (inOverlay || words.length === 0 || isListening) return;

      if (e.ctrlKey && e.key >= '1' && e.key <= String(totalLevels)) {
        e.preventDefault();
        jumpToLevel(parseInt(e.key));
        return;
      }

      // Testing shortcuts
      if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        const randomWord = words[Math.floor(Math.random() * words.length)];
        handleWordSpoken(randomWord);
      } else if (e.key.toLowerCase() === 'w') {
        e.preventDefault();
        const randomWrongWord = words[Math.floor(Math.random() * words.length)];
        setCurrentFailedWord(randomWrongWord);
        setShowTryAgainOverlay(true);
        setAttemptsPerWord(prev => ({
          ...prev,
          [randomWrongWord.word]: 0
        }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [words, isListening, showCompletionOverlay, showTryAgainOverlay, showLevelCompleteOverlay]);

  useEffect(() => {
    console.log(`Level changed to: ${currentLevel}`);
    console.log(`Level data for level${currentLevel}:`, exercise[`level${currentLevel}`]);
  }, [currentLevel, exercise]);

  if (isLoading) return <LoadingScreen />;
  const containerStyle = {
    backgroundImage: `url(${exercise.backgroundImage})`,  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: '"Roboto", sans-serif',
    textAlign: 'center',
    margin: 0,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'auto',
   
  };

  return (
    <div className="game-container" style={containerStyle}>
       
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <GameHeader 
        title={exercise.title}
        subtitle={`Level ${currentLevel}`}
        progress={progress}
        currentTip={currentTip}
        onCloseTip={() => setCurrentTip("")}
      />
      
      <div className="game-area">
        <div className="word-list">
          {words.map((wordObj, index) => {
            const wordId = `${wordObj.word}-${index}`;
            return (
              <WordCard
                key={wordId}
                wordObj={wordObj}
                wordId={wordId}
                isSelected={selectedWord === wordId}
                isListening={isListening}
                isAllow={isAllow}
                currentTip={currentTip}
                onClick={() => {
                  if (isListening || !isAllow) return;
                  setSelectedWord(wordId);
                  setCurrentTip("");
                  startListening(wordObj);
                }}
                onTipClick={(e) => {
                  e.stopPropagation();
                  setCurrentTip(currentTip === wordObj.tip ? "" : wordObj.tip);
                  setSelectedWord(wordId);
                }}
                onSpeakerClick={(e) => {
                  e.stopPropagation();
                  speakText(wordObj.word);
                }}
              />
            );
          })}
        </div>
           <BasketArea 
  showAnimation={showAnimation}
  basketImage={currentLevelData.basket_img}
  animationData={currentLevelData.animation}
/>
      </div>


      {showCompletionOverlay && (
  <CompletionOverlay
    stars={levelStars[currentLevel]}  // Use currentLevel instead of totalLevels
    onClose={closeOverlay}
  />
)}
      
      {showLevelCompleteOverlay && (
        <LevelCompleteOverlay
          currentLevel={currentLevel}
          onProceed={proceedToNextLevel}
          stars={levelStars[currentLevel]}
        />
      )}
      
      {showTryAgainOverlay && currentFailedWord && (
        <TryAgainOverlay
          word={currentFailedWord.word}
          videoSrc={exercise.videoSrc}
          onTryAgain={tryAgainWord}
          onNextWord={moveToNextWord}
        />
      )}
=======
import React, { useState, useRef, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { LinearProgress, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData2 from "../../assets/ballon.json";
import balloonImage from "../../assets/img/ballon.png";
import "../../styles/ArticulationGame.css";
import { speakText } from "../../utils/tts";
import { startSpeechRecognition } from "../../utils/speechRecognition";
import PropTypes from "prop-types";
import articulationExercises from "../../data/soundData"; // ✅ Import from data file

const SpeakerButton = ({ word }) => (
  <button
    className="play-button"
    onClick={(e) => {
      e.stopPropagation();
      speakText(word);
    }}
    aria-label={`Play pronunciation for ${word}`}
  >
    🔊
  </button>
);

const PSoundAGame = () => {
  const { soundId } = useParams(); // Change from 'id' to 'soundId'
  const exercise = articulationExercises[soundId]; // ✅ Get exercise by id from data
  if (!exercise) return <div>Exercise not found</div>;

  const [words, setWords] = useState(exercise.wordsWithEmojis || []);
  const [progress, setProgress] = useState(0);
  const [showBalloonImage, setShowBalloonImage] = useState(true);
  const [showLottieAnimation, setShowLottieAnimation] = useState(false);
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const lottieRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleWordSpoken = (wordObj) => {
    const remaining = words.filter((w) => w.word !== wordObj.word);
    setWords(remaining);
    const newProgress = ((exercise.wordsWithEmojis.length - remaining.length) /
      exercise.wordsWithEmojis.length) * 100;
    setProgress(newProgress);
    setShowBalloonImage(false);
    setShowLottieAnimation(true);
    if (lottieRef.current) lottieRef.current.play();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowLottieAnimation(false);
      setShowBalloonImage(true);
      if (newProgress >= 100) setShowCompletionOverlay(true);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const closeOverlay = () => {
    setShowCompletionOverlay(false);
  };

  const calculateStars = () => Math.min(5, Math.ceil(progress / 20));

  return (
    <div className="game-container">
      <h2 className="title">{exercise.title}</h2>
      <p className="subtitle">Tap the speaker to hear. Tap the word card to say it out loud than see the magic✨.</p>
      <LinearProgress variant="determinate" value={progress} className="progress-bar" />
      <div className="game-area">
        <div className="word-list">
          {words.map((wordObj) => (
            <motion.div
              key={wordObj.word}
              className={`word-card ${selectedWord === wordObj.word ? "selected" : ""} ${isListening ? "disabled" : ""}`}
              whileHover={{ scale: isListening ? 1 : 1.05 }}
              whileTap={{ scale: isListening ? 1 : 0.95 }}
              onClick={() => {
                if (isListening) return;
                setSelectedWord(wordObj.word);
                handleWordSpoken(wordObj); // ✅ Testing mode: simulate correct speech
              }}
              role="button"
              tabIndex="0"
            >
              <span className="emoji" role="img">{wordObj.emoji}</span>
              <span className="word-text">{wordObj.word}</span>
              <SpeakerButton word={wordObj.word} />
            </motion.div>
          ))}
        </div>

        <div className="basket">
          {showBalloonImage && <img src={balloonImage} alt="Balloon" className="balloon-image" />}
          {showLottieAnimation && (
            <Lottie
              ref={lottieRef}
              options={{ animationData: animationData2, loop: false, autoplay: true }}
              height={300}
              width={300}
            />
          )}
        </div>

        {showCompletionOverlay && (
          <div className="completion-overlay">
            <div className="completion-content">
              <h2>Great Job! 🎉</h2>
              <div className="stars-container">
                {[...Array(calculateStars())].map((_, i) => (
                  <span key={i} className="star" role="img">⭐</span>
                ))}
              </div>
              <p>You completed {progress}% of the exercise!</p>
              <Link to={"/Articulation"} className="custom-button">
                <Button variant="contained" color="primary" onClick={closeOverlay}>
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
    </div>
  );
};

<<<<<<< HEAD
export default PSoundAGame;
=======
PSoundAGame.propTypes = {
  id: PropTypes.string,
};

export default PSoundAGame;
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b

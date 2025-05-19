// src/pages/TurtleExercisePage.jsx
import React, { useState, useEffect } from "react";
import { Button, Typography, Container, Card, LinearProgress } from "@mui/material";
import { speakText } from "../utils/tts";
import "../styles/TurtleTalkPage.css";
import CompletionOverlay from "../components/excercise/compOverlay";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";




const TurtleExercisePage = () => {
  const { t, i18n } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState("");
  const [childSpeech, setChildSpeech] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [starsEarned, setStarsEarned] = useState(0);
  const navigate = useNavigate();
const [completedSentences, setCompletedSentences] = useState(0); // Add this state


const turtleSentences = i18n.language === 'ur'
  ? [
      "میرا نام علی ہے۔",
      "میری عمر چھ سال ہے۔",
      "میں پارک جا رہا ہوں۔",
      "آج سورج چمک رہا ہے۔",
      "مجھے سیب کھانا پسند ہے۔",
      "ہم روز فٹبال کھیلتے ہیں۔"
    ]
  : [
      "My name is Ali.",
      "I am 6 years old.",
      "I am going to the park.",
      "The sun is shining today.",
      "I like eating apples.",
      "We play football every day."
    ];


  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (turtleSentences.length > 0) {
      setCurrentSentence(turtleSentences[0]);
    }
  }, []);


 const startNewSentence = () => {
  let nextIndex;
  if (currentIndex >= turtleSentences.length - 1) {
    nextIndex = 0;
    setShowCompletion(false);
  } else {
    nextIndex = currentIndex + 1;
  }
  
  setCurrentIndex(nextIndex);
  const newSentence = turtleSentences[nextIndex];
  setCurrentSentence(newSentence);
  setChildSpeech("");
  setResultMessage("");
  
  // Speak the NEW sentence immediately
  speakText(newSentence);
};
  const repeatCurrentSentence = () => {
    setChildSpeech("");
    setResultMessage("");
    speakText(currentSentence);
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser. Please use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Child Said:", transcript);
      setChildSpeech(transcript);
      checkAnswer(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };
 const checkAnswer = (childText) => {
    const normalizeText = (text) => {
      return text.trim().toLowerCase()
        .replace(/[.,!?]/g, "")
        .replace(/\b(six|6)\b/g, "6")
        .replace(/\b(everyday|every day)\b/g, "every day")
        .replace(/\s+/g, " ")
        .replace(/\b(football|soccer)\b/g, "football");
    };

    
  const calculateSimilarity = (str1, str2) => {
    const words1 = str1.split(" ");
    const words2 = str2.split(" ");
    const matchingWords = words1.filter(word => words2.includes(word)).length;
    return matchingWords / Math.max(words1.length, words2.length);
  };
    const cleanChild = normalizeText(childText);
    const cleanOriginal = normalizeText(currentSentence);
    const similarity = calculateSimilarity(cleanChild, cleanOriginal);

    if (cleanChild === cleanOriginal || similarity >= 0.85) {
      setResultMessage("✅ Great job! You said it perfectly!");
      
      // Only update progress when sentence is successfully completed
      const newCompleted = completedSentences + 1;
      setCompletedSentences(newCompleted);
      
      const newProgress = (newCompleted / turtleSentences.length) * 100;
      setProgress(newProgress);
      
      const newStars = Math.min(newCompleted, 5);
      setStarsEarned(newStars);

      setTimeout(() => {
        if (currentIndex < turtleSentences.length - 1) {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);
          setCurrentSentence(turtleSentences[nextIndex]);
          setChildSpeech("");
          setResultMessage("");
         
        } else {
          setStarsEarned(5);
          setShowCompletion(true);
        }
      }, 1500);
    } else {
      setResultMessage(`❌ Almost! Try again. You said: "${childText}"`);
    }
  };

const handleCloseOverlay = () => {
  setShowCompletion(false);
  setCurrentIndex(0);
  setCurrentSentence(turtleSentences[0]);
  setChildSpeech("");
  setResultMessage("");
  setProgress(0);
  setStarsEarned(0);
  setCompletedSentences(0);
  navigate("/fluency");
};

  return (
    <Container maxWidth="md" className={`kids-page `}>
      <Typography variant="h4" gutterBottom className={`kids-heading ${i18n.language === 'ur' ? 'urdu' : ''}`}>
       {t("turtle.title")}
      </Typography>
  
      <Card className="kids-card">
        <LinearProgress
          variant="determinate"
          value={progress}
          className="progress-bar"
          style={{ marginBottom: '20px', height: '10px' }}
        />
        
        <Typography variant="h5" gutterBottom className="kids-sentence">
          "{currentSentence || "Click Start to Begin!"}"
        </Typography>
    <div className="btn-sec ">
        <Button
          variant="contained"
          onClick={startNewSentence}
          className="kids-button mx-2"
        >
          {/* {currentIndex === turtleSentences.length - 1 ? "🎯 Restart" : "🎯 Next Sentence"} */}
            {currentIndex === turtleSentences.length - 1 ? t("turtle.restart") : t("turtle.next")}
        </Button>
  
        {currentSentence && (
          <>
            <Button
              variant="contained"
               color="secondary"
              onClick={repeatCurrentSentence}
              className="kids-button mx-2"
            >
           {t("turtle.hearAgain")}
            </Button>
  
            <Button
              variant="contained"
              color="secondary"
              onClick={startListening}
              disabled={isListening}
              className="kids-button mx-2"
            >
              🎤 {isListening ? t("turtle.listening") : t("turtle.speakNow")}
            </Button>

   
          </>
        )}
  </div>
        {resultMessage && (
          <Typography
            variant="h6"
            className="kids-result"
            style={{ color: resultMessage.startsWith("✅") ? "green" : "red" }}
          >
            {resultMessage}
          </Typography>
        )}
      </Card>
      
      {showCompletion && (
        <CompletionOverlay 
          stars={starsEarned} 
          onClose={handleCloseOverlay} 
        />
      )}
    </Container>
  );
};

export default TurtleExercisePage;
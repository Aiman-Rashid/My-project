// src/pages/TurtleExercisePage.jsx

import React, { useState } from "react";
import { Button, Typography, Container, Card } from "@mui/material";
import { speakText } from "../utils/tts1"; // Your text-to-speech function
// If you haven't already installed "tts", install or use your existing speakText
import "../styles/TurtleTalkPage.css"; // ✅


const turtleSentences = [
  "I am going to the park.",
  "The sun is shining today.",
  "I like eating apples.",
  "My name is Ali.",
  "We play football every day.",
];

const TurtleExercisePage = () => {
  const [currentSentence, setCurrentSentence] = useState("");
  const [childSpeech, setChildSpeech] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startNewSentence = () => {
    const random = turtleSentences[Math.floor(Math.random() * turtleSentences.length)];
    setCurrentSentence(random);
    setChildSpeech("");
    setResultMessage("");
    speakText(random);
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
    const cleanChild = childText.trim().toLowerCase().replace(/[.,!?]/g, "");
    const cleanOriginal = currentSentence.trim().toLowerCase().replace(/[.,!?]/g, "");
  
    if (cleanChild.includes(cleanOriginal) || cleanOriginal.includes(cleanChild)) {
      setResultMessage("✅ Great job! You said it perfectly!");
    } else {
      setResultMessage("❌ Oops! Try again. You said: " + childText);
    }
  };
  
  
  return (
    <Container maxWidth="md" className="kids-page">
      <Typography variant="h4" gutterBottom className="kids-heading">
          Turtle Talk Practice
      </Typography>
  
      <Card className="kids-card">
        <Typography variant="h5" gutterBottom className="kids-sentence">
          "{currentSentence || "Click Start to Begin!"}"
        </Typography>
  
        <Button
          variant="contained"
          onClick={startNewSentence}
          className="kids-button"
        >
          🎯 New Sentence
        </Button>
  
        {currentSentence && (
          <>
            <Button
              variant="outlined"
              onClick={() => speakText(currentSentence)}
              className="kids-button"
            >
              🔊 Hear Again
            </Button>
  
            <Button
              variant="contained"
              color="secondary"
              onClick={startListening}
              disabled={isListening}
              className="kids-button"
            >
              🎤 {isListening ? "Listening..." : "Speak Now"}
            </Button>
          </>
        )}
  
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
    </Container>
  );
  
};

export default TurtleExercisePage;
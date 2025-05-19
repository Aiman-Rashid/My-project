import { useState, useEffect } from "react";
import MirrorCamera from "../components/excercise/MirrorCamera.jsx";
import { FaRegSmile, FaSadTear, FaMicrophone, FaMagic, FaStar } from "react-icons/fa";
import "../styles/MirrorSpeakingPage.css";
import { useTranslation } from "react-i18next";

const MirrorSpeakingPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const sentences = {
    en: [
      "Good morning!",
      "I brush my teeth.",
      "I eat breakfast.",
      "I go to school.",
      "I like to read books.",
      "I play with my friends.",
      "I drink water.",
      "I do my homework.",
      "I watch cartoons.",
      "Good night!"
    ],
    ur: [
      "صبح بخیر!",
      "میں اپنے دانت صاف کرتا ہوں۔",
      "میں ناشتہ کرتا ہوں۔",
      "میں سکول جاتا ہوں۔",
      "مجھے کتابیں پڑھنا پسند ہے۔",
      "میں اپنے دوستوں کے ساتھ کھیلتا ہوں۔",
      "میں پانی پیتا ہوں۔",
      "میں اپنا ہوم ورک کرتا ہوں۔",
      "میں کارٹون دیکھتا ہوں۔",
      "شب بخیر!"
    ]
  };

  const [isListening, setIsListening] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showStars, setShowStars] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [bounceTitle, setBounceTitle] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const getCurrentSentence = () => {
    return sentences[currentLanguage]?.[currentSentenceIndex] || sentences.en[currentSentenceIndex];
  };

  const checkMatch = (spoken, target) => {
    const cleanSpoken = spoken.replace(/[^\w\s]|_/g, "").toLowerCase().trim();
    const cleanTarget = target.replace(/[^\w\s]|_/g, "").toLowerCase().trim();
    return cleanSpoken.includes(cleanTarget);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBounceTitle(true);
      setTimeout(() => setBounceTitle(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(((currentSentenceIndex) / sentences.en.length) * 100);
  }, [currentSentenceIndex]);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(t('mirrorSpeaking.feedback.error'));
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = currentLanguage === 'ur' ? 'ur-PK' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setIsListening(true);
    setShowStars(true);

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript;
      const currentSentence = getCurrentSentence();
      console.log("You said:", spoken);

      if (checkMatch(spoken, currentSentence)) {
        setFeedbackMessage(t('mirrorSpeaking.feedback.correct', { sentence: currentSentence }));
        setIsCorrect(true);
        triggerConfetti();
        
        setTimeout(() => {
          if (currentSentenceIndex < sentences.en.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
            setFeedbackMessage("");
            setIsCorrect(null);
          } else {
            setFeedbackMessage(t('mirrorSpeaking.feedback.completed'));
          }
        }, 3000);
      } else {
        setFeedbackMessage(t('mirrorSpeaking.feedback.incorrect', { 
          spoken: spoken, 
          sentence: currentSentence 
        }));
        setIsCorrect(false);
      }

      setIsListening(false);
      setTimeout(() => setShowStars(false), 1000);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setFeedbackMessage(t('mirrorSpeaking.feedback.error'));
      setIsListening(false);
      setShowStars(false);
    };
  };

  return (
    <div className="mirror-speaking-container" dir={currentLanguage === 'ur' ? 'rtl' : 'ltr'}>
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
        <h1 className={`mirror-title ${currentLanguage === 'ur' ? 'urdu-title' : ''}`}>
          <span className="magic-icon"><FaMagic /></span>
          <span className="mirror-emoji">🪞</span> {t('mirrorSpeaking.title')}
          <span className="magic-icon"><FaMagic /></span>
        </h1>

        <div className="mirror-card">
          <MirrorCamera />
          
          <div className="instruction-container">
            <h2 className="instruction-title">{t('mirrorSpeaking.lookInMirror')}</h2>
            <p className="speech-prompt">
              <span className={`speech-text ${currentLanguage === 'ur' ? 'urdu-text' : ''}`}>
                "{getCurrentSentence()}"
              </span>
            </p>
          </div>

          <button 
            className={`speak-button ${isListening ? 'listening' : ''}`}
            onClick={startSpeechRecognition}
            disabled={isListening}
          >
            <FaMicrophone className="mic-icon" />
            {isListening ? t('mirrorSpeaking.listenButton.listening') : t('mirrorSpeaking.listenButton.default')}
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
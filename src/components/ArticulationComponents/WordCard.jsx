import React from "react";
import { motion } from "framer-motion";

const WordCard = ({ 
  wordObj, 
  wordId, 
  isSelected, 
  isListening, 
  isAllow,
  currentTip,
  onClick,
  onTipClick,
  onSpeakerClick
}) => (
  <motion.div
    className={`word-card ${isSelected ? "selected" : ""} ${isListening ? "disabled" : ""}`}
    whileHover={{ scale: isListening ? 1 : 1.05 }}
    whileTap={{ scale: isListening ? 1 : 0.95 }}
    onClick={onClick}
    role="button"
    tabIndex="0"
  >
    <span className="emoji" role="img">
      {wordObj.emoji}
    </span>
    <span className="word-text">{wordObj.word}</span>
    <div className="word-buttons">
      <button
        className="play-button"
        onClick={onSpeakerClick}
        aria-label={`Play pronunciation for ${wordObj.word}`}
      >
        🔊
      </button>
      <button 
        className="tip-button"
        onClick={onTipClick}
        aria-label={`Show tip for ${wordObj.word}`}
      >
        💡
      </button>
    </div>
  </motion.div>
);

export default WordCard;
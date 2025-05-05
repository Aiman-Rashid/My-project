import React from "react";
import { motion } from "framer-motion";

const TipDisplay = ({ tip, onClose }) => (
  <motion.div 
    className="tip-display"
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div className="tip-content">
      <span className="tip-text">{tip}</span>
      <button 
        className="close-tip"
        onClick={onClose}
        aria-label="Close tip"
      >
        ✕
      </button>
    </div>
  </motion.div>
);

export default TipDisplay;
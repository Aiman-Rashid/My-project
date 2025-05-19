import React from 'react';
import { Button } from '@mui/material';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import '../../styles/ArticulationGame.css';

const LevelCompleteOverlay = ({ currentLevel, onProceed }) => {
  // Determine the next level number and description
  const nextLevel = currentLevel + 1;



  return (
    <motion.div
      className="completion-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="completion-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <h2>Level {currentLevel} Complete! 🎉</h2>
        <p className="level-description">Ready for Level {nextLevel}</p>
        
        <div className="stars-container">
          {[...Array(5)].map((_, i) => (
            <StarIcon 
              key={i} 
              className="filled-star"
              component={motion.svg}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: i * 0.1,
                type: 'spring',
                stiffness: 300,
                damping: 10
              }}
            />
          ))}
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="contained" 
            onClick={onProceed}
            className="custom-button"
            sx={{
          
              color: 'white',
              fontSize: '1rem',
              padding: '12px 24px',
              marginTop: '20px',
             
            }}
          
          >
            Continue to Level {nextLevel}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LevelCompleteOverlay;
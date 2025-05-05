import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarIcon from '@mui/icons-material/Star';

const CompletionOverlay = ({ stars = 5, onClose }) => {  // Default to 5 stars if undefined
  return (
    <div className="completion-overlay">
      <div className="completion-content">
        <h2>Great Job! 🎉</h2>
        <div className="stars-container">
          {[...Array(5)].map((_, i) => (
            i < stars ? (
              <StarIcon key={i} className="filled-star" />
            ) : (
              <StarOutlineOutlinedIcon key={i} className="empty-star" />
            )
          ))}
        </div>
        <Link to="/Articulation" className="custom-button">
          <Button variant="contained" onClick={onClose}>
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CompletionOverlay;
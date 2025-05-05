import React from 'react';
import { Button } from '@mui/material';

const TryAgainOverlay = ({ word, videoSrc, onTryAgain, onNextWord, videoRef }) => {
  return (
    <div className="try-again-overlay">
      <div className="try-again-content">
        <p>Let's try together! 👄</p>
        
        <video
          className="try-again-video"
          src={videoSrc}
          autoPlay
          loop={false}
          playsInline
          ref={videoRef}
        />
        
        <div className="button-group">
          <Button 
            className="try-again-button" 
            onClick={onTryAgain}
            sx={{
              padding: '0.5rem 1rem !important',
              fontSize: '0.85rem !important',
              minWidth: '120px'
            }}
          >
            TRY '{word.toUpperCase()}' AGAIN
          </Button>
          <Button 
            className="next-word-button" 
            onClick={onNextWord}
            sx={{
              padding: '0.5rem 1rem !important',
              fontSize: '0.85rem !important',
              minWidth: '120px'
            }}
          >
            <div className="button-content">
              <div className="main-action">NEXT WORD</div>
              <div className="penalty-notice">
                You will lose one star <span className="star">⭐</span>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TryAgainOverlay;
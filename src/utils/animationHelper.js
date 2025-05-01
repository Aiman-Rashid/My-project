// utils/animationHelper.js
import { speakText } from "./tts";  // Import speakText function

export const playAnimationAndSound = (lottieRef, animationData, message, callback) => {
  lottieRef.current?.play();  // Play animation
  speakText(message, () => {
    lottieRef.current?.stop();  // Stop animation after speech
    if (callback) callback();  // Execute callback after animation and speech end
  });
};